import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConformancePackStatusQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeConformancePackStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePackStatus = "StarlingDoveService.DescribeConformancePackStatus"
}
export declare class DescribeConformancePackStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConformancePackStatusXAmzTargetEnum;
}
export declare class DescribeConformancePackStatusRequest extends SpeakeasyBase {
    queryParams: DescribeConformancePackStatusQueryParams;
    headers: DescribeConformancePackStatusHeaders;
    request: shared.DescribeConformancePackStatusRequest;
}
export declare class DescribeConformancePackStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeConformancePackStatusResponse?: shared.DescribeConformancePackStatusResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
}
