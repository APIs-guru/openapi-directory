import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagStatusEnum } from "./tagstatusenum";


// LifecyclePolicyPreviewFilter
/** 
 * The filter for the lifecycle policy preview.
**/
export class LifecyclePolicyPreviewFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=tagStatus" })
  tagStatus?: TagStatusEnum;
}
