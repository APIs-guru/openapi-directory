import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class AddTagsToResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList: Tag[];
}
