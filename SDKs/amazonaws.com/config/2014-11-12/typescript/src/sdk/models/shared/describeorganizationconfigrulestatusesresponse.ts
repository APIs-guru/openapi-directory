import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfigRuleStatus } from "./organizationconfigrulestatus";



export class DescribeOrganizationConfigRuleStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleStatuses", elemType: OrganizationConfigRuleStatus })
  organizationConfigRuleStatuses?: OrganizationConfigRuleStatus[];
}
