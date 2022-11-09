import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";


// OrganizationConfigRule
/** 
 * An organization config rule that has information about config rules that Config creates in member accounts.
**/
export class OrganizationConfigRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludedAccounts" })
  excludedAccounts?: string[];

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=OrganizationConfigRuleArn" })
  organizationConfigRuleArn: string;

  @Metadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;

  @Metadata({ data: "json, name=OrganizationCustomRuleMetadata" })
  organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  @Metadata({ data: "json, name=OrganizationManagedRuleMetadata" })
  organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
