import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusDetailFilters } from "./statusdetailfilters";



export class GetOrganizationConfigRuleDetailedStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: StatusDetailFilters;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleName" })
  organizationConfigRuleName: string;
}
