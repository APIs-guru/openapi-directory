import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";



// OrganizationConfigRule
/** 
 * An organization config rule that has information about config rules that Config creates in member accounts.
**/
export class OrganizationConfigRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludedAccounts" })
  excludedAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleArn" })
  organizationConfigRuleArn: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationCustomRuleMetadata" })
  organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  @SpeakeasyMetadata({ data: "json, name=OrganizationManagedRuleMetadata" })
  organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
