import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceDetailedStatusFilters } from "./organizationresourcedetailedstatusfilters";
export declare class GetOrganizationConformancePackDetailedStatusRequest extends SpeakeasyBase {
    filters?: OrganizationResourceDetailedStatusFilters;
    limit?: number;
    nextToken?: string;
    organizationConformancePackName: string;
}
