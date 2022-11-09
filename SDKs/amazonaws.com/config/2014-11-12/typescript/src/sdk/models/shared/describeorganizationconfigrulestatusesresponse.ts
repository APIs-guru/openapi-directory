import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationConfigRuleStatus } from "./organizationconfigrulestatus";


export class DescribeOrganizationConfigRuleStatusesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationConfigRuleStatuses", elemType: shared.OrganizationConfigRuleStatus })
  organizationConfigRuleStatuses?: OrganizationConfigRuleStatus[];
}
