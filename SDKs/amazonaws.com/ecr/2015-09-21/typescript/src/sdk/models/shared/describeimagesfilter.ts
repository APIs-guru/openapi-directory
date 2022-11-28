import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagStatusEnum } from "./tagstatusenum";



// DescribeImagesFilter
/** 
 * An object representing a filter on a <a>DescribeImages</a> operation.
**/
export class DescribeImagesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tagStatus" })
  tagStatus?: TagStatusEnum;
}
