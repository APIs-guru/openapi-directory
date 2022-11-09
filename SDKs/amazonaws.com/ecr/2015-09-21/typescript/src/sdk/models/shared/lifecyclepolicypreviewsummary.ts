import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LifecyclePolicyPreviewSummary
/** 
 * The summary of the lifecycle policy preview request.
**/
export class LifecyclePolicyPreviewSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiringImageTotalCount" })
  expiringImageTotalCount?: number;
}
