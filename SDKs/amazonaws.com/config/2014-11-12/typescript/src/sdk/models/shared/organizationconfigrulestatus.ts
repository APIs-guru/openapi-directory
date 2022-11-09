import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationRuleStatusEnum } from "./organizationrulestatusenum";


// OrganizationConfigRuleStatus
/** 
 * Returns the status for an organization config rule in an organization.
**/
export class OrganizationConfigRuleStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;

  @Metadata({ data: "json, name=OrganizationRuleStatus" })
  organizationRuleStatus: OrganizationRuleStatusEnum;
}
