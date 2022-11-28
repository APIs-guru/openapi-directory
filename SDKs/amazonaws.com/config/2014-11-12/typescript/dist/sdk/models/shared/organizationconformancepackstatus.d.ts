import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceStatusEnum } from "./organizationresourcestatusenum";
/**
 * Returns the status for an organization conformance pack in an organization.
**/
export declare class OrganizationConformancePackStatus extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    lastUpdateTime?: Date;
    organizationConformancePackName: string;
    status: OrganizationResourceStatusEnum;
}
