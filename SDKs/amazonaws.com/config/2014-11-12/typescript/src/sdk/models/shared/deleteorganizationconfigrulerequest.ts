import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationConfigRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;
}
