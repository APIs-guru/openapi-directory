import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeOrganizationConformancePackStatusesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeOrganizationConformancePackStatusesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConformancePackStatuses = "StarlingDoveService.DescribeOrganizationConformancePackStatuses"
}
export declare class DescribeOrganizationConformancePackStatusesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationConformancePackStatusesXAmzTargetEnum;
}
export declare class DescribeOrganizationConformancePackStatusesRequest extends SpeakeasyBase {
    queryParams: DescribeOrganizationConformancePackStatusesQueryParams;
    headers: DescribeOrganizationConformancePackStatusesHeaders;
    request: shared.DescribeOrganizationConformancePackStatusesRequest;
}
export declare class DescribeOrganizationConformancePackStatusesResponse extends SpeakeasyBase {
    contentType: string;
    describeOrganizationConformancePackStatusesResponse?: shared.DescribeOrganizationConformancePackStatusesResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchOrganizationConformancePackException?: any;
    organizationAccessDeniedException?: any;
    statusCode: number;
}
