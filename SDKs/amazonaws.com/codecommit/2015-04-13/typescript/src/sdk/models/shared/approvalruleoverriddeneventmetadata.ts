import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OverrideStatusEnum } from "./overridestatusenum";



// ApprovalRuleOverriddenEventMetadata
/** 
 * Returns information about an override event for approval rules for a pull request.
**/
export class ApprovalRuleOverriddenEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overrideStatus" })
  overrideStatus?: OverrideStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
