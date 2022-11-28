import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";



export class PutOrganizationConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludedAccounts" })
  excludedAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationCustomRuleMetadata" })
  organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  @SpeakeasyMetadata({ data: "json, name=OrganizationManagedRuleMetadata" })
  organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
