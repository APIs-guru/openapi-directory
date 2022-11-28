import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceDetailedStatusEnum } from "./organizationresourcedetailedstatusenum";
/**
 * Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.
**/
export declare class OrganizationConformancePackDetailedStatus extends SpeakeasyBase {
    accountId: string;
    conformancePackName: string;
    errorCode?: string;
    errorMessage?: string;
    lastUpdateTime?: Date;
    status: OrganizationResourceDetailedStatusEnum;
}
