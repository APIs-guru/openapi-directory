import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRuleStatusEnum } from "./organizationrulestatusenum";



// OrganizationConfigRuleStatus
/** 
 * Returns the status for an organization config rule in an organization.
**/
export class OrganizationConfigRuleStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationRuleStatus" })
  organizationRuleStatus: OrganizationRuleStatusEnum;
}
