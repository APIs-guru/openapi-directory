import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConformancePacksQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePacks = "StarlingDoveService.DescribeConformancePacks"
}
export declare class DescribeConformancePacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConformancePacksXAmzTargetEnum;
}
export declare class DescribeConformancePacksRequest extends SpeakeasyBase {
    queryParams: DescribeConformancePacksQueryParams;
    headers: DescribeConformancePacksHeaders;
    request: shared.DescribeConformancePacksRequest;
}
export declare class DescribeConformancePacksResponse extends SpeakeasyBase {
    contentType: string;
    describeConformancePacksResponse?: shared.DescribeConformancePacksResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConformancePackException?: any;
    statusCode: number;
}
