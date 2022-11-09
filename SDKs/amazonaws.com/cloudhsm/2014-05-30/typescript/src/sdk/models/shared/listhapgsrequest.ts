import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListHapgsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
