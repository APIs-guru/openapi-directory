import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfigRule } from "./organizationconfigrule";



export class DescribeOrganizationConfigRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRules", elemType: OrganizationConfigRule })
  organizationConfigRules?: OrganizationConfigRule[];
}
