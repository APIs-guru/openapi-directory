import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OverrideStatusEnum } from "./overridestatusenum";


// ApprovalRuleOverriddenEventMetadata
/** 
 * Returns information about an override event for approval rules for a pull request.
**/
export class ApprovalRuleOverriddenEventMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=overrideStatus" })
  overrideStatus?: OverrideStatusEnum;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
