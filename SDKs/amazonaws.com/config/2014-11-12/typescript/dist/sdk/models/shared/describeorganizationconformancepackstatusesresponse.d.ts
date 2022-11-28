import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConformancePackStatus } from "./organizationconformancepackstatus";
export declare class DescribeOrganizationConformancePackStatusesResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConformancePackStatuses?: OrganizationConformancePackStatus[];
}
