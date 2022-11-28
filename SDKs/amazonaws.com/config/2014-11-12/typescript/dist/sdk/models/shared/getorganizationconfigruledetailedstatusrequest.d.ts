import { SpeakeasyBase } from "../../../internal/utils";
import { StatusDetailFilters } from "./statusdetailfilters";
export declare class GetOrganizationConfigRuleDetailedStatusRequest extends SpeakeasyBase {
    filters?: StatusDetailFilters;
    limit?: number;
    nextToken?: string;
    organizationConfigRuleName: string;
}
