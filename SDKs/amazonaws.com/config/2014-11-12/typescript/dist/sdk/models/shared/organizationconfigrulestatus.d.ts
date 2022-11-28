import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRuleStatusEnum } from "./organizationrulestatusenum";
/**
 * Returns the status for an organization config rule in an organization.
**/
export declare class OrganizationConfigRuleStatus extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    lastUpdateTime?: Date;
    organizationConfigRuleName: string;
    organizationRuleStatus: OrganizationRuleStatusEnum;
}
