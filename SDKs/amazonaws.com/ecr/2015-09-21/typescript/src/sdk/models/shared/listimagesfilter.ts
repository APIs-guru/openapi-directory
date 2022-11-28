import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagStatusEnum } from "./tagstatusenum";



// ListImagesFilter
/** 
 * An object representing a filter on a <a>ListImages</a> operation.
**/
export class ListImagesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tagStatus" })
  tagStatus?: TagStatusEnum;
}
