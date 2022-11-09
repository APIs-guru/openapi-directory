import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationConfigRule } from "./organizationconfigrule";


export class DescribeOrganizationConfigRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationConfigRules", elemType: shared.OrganizationConfigRule })
  organizationConfigRules?: OrganizationConfigRule[];
}
