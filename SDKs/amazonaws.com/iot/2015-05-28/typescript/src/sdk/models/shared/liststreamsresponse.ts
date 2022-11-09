import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamSummary } from "./streamsummary";


export class ListStreamsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=streams", elemType: shared.StreamSummary })
  streams?: StreamSummary[];
}
