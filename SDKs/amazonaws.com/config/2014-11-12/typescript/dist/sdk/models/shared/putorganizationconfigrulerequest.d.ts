import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";
export declare class PutOrganizationConfigRuleRequest extends SpeakeasyBase {
    excludedAccounts?: string[];
    organizationConfigRuleName: string;
    organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
    organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
