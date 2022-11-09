import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusDetailFilters } from "./statusdetailfilters";


export class GetOrganizationConfigRuleDetailedStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters?: StatusDetailFilters;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;
}
