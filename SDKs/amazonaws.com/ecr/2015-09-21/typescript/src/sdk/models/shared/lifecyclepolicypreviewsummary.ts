import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LifecyclePolicyPreviewSummary
/** 
 * The summary of the lifecycle policy preview request.
**/
export class LifecyclePolicyPreviewSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiringImageTotalCount" })
  expiringImageTotalCount?: number;
}
