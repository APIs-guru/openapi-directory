import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListHsmsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
