import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutOrganizationConfigRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleArn" })
  organizationConfigRuleArn?: string;
}
