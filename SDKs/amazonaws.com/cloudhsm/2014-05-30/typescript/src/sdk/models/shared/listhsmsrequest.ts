import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListHsmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
