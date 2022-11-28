import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceDetailedStatusEnum } from "./organizationresourcedetailedstatusenum";
/**
 * Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
**/
export declare class OrganizationResourceDetailedStatusFilters extends SpeakeasyBase {
    accountId?: string;
    status?: OrganizationResourceDetailedStatusEnum;
}
