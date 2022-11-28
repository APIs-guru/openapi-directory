import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeOrganizationConformancePacksQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeOrganizationConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConformancePacks = "StarlingDoveService.DescribeOrganizationConformancePacks"
}
export declare class DescribeOrganizationConformancePacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationConformancePacksXAmzTargetEnum;
}
export declare class DescribeOrganizationConformancePacksRequest extends SpeakeasyBase {
    queryParams: DescribeOrganizationConformancePacksQueryParams;
    headers: DescribeOrganizationConformancePacksHeaders;
    request: shared.DescribeOrganizationConformancePacksRequest;
}
export declare class DescribeOrganizationConformancePacksResponse extends SpeakeasyBase {
    contentType: string;
    describeOrganizationConformancePacksResponse?: shared.DescribeOrganizationConformancePacksResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchOrganizationConformancePackException?: any;
    organizationAccessDeniedException?: any;
    statusCode: number;
}
