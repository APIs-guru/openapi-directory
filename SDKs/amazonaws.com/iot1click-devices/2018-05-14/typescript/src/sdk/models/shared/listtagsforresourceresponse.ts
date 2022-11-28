import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
