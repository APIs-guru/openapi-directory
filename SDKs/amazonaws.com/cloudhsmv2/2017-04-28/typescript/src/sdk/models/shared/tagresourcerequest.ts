import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class TagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList: Tag[];
}
