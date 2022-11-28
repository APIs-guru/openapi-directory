import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";
/**
 * An organization config rule that has information about config rules that Config creates in member accounts.
**/
export declare class OrganizationConfigRule extends SpeakeasyBase {
    excludedAccounts?: string[];
    lastUpdateTime?: Date;
    organizationConfigRuleArn: string;
    organizationConfigRuleName: string;
    organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
    organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
