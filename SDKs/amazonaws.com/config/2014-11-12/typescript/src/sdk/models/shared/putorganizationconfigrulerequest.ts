import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";


export class PutOrganizationConfigRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludedAccounts" })
  excludedAccounts?: string[];

  @Metadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;

  @Metadata({ data: "json, name=OrganizationCustomRuleMetadata" })
  organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;

  @Metadata({ data: "json, name=OrganizationManagedRuleMetadata" })
  organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
