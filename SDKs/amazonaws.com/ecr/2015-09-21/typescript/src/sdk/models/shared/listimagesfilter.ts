import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagStatusEnum } from "./tagstatusenum";


// ListImagesFilter
/** 
 * An object representing a filter on a <a>ListImages</a> operation.
**/
export class ListImagesFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=tagStatus" })
  tagStatus?: TagStatusEnum;
}
