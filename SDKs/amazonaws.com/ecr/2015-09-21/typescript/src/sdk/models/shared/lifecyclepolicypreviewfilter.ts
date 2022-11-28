import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagStatusEnum } from "./tagstatusenum";



// LifecyclePolicyPreviewFilter
/** 
 * The filter for the lifecycle policy preview.
**/
export class LifecyclePolicyPreviewFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tagStatus" })
  tagStatus?: TagStatusEnum;
}
