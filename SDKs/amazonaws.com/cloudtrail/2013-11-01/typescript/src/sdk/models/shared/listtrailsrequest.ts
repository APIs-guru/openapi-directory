import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTrailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
