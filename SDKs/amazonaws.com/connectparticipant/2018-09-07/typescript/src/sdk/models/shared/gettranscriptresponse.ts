import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Item } from "./item";


export class GetTranscriptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialContactId" })
  initialContactId?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Transcript", elemType: shared.Item })
  transcript?: Item[];
}
