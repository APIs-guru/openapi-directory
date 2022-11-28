import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListHapgsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
