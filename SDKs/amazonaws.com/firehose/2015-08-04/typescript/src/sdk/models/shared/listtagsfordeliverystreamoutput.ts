import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class ListTagsForDeliveryStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HasMoreTags" })
  hasMoreTags: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags: Tag[];
}
