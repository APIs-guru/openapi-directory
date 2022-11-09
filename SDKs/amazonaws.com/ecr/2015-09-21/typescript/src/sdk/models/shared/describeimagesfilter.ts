import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagStatusEnum } from "./tagstatusenum";


// DescribeImagesFilter
/** 
 * An object representing a filter on a <a>DescribeImages</a> operation.
**/
export class DescribeImagesFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=tagStatus" })
  tagStatus?: TagStatusEnum;
}
