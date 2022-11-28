import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;
}
