import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeScalableTargetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeScalableTargetsXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalableTargets = "AnyScaleFrontendService.DescribeScalableTargets"
}
export declare class DescribeScalableTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScalableTargetsXAmzTargetEnum;
}
export declare class DescribeScalableTargetsRequest extends SpeakeasyBase {
    queryParams: DescribeScalableTargetsQueryParams;
    headers: DescribeScalableTargetsHeaders;
    request: shared.DescribeScalableTargetsRequest;
}
export declare class DescribeScalableTargetsResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    describeScalableTargetsResponse?: shared.DescribeScalableTargetsResponse;
    internalServiceException?: any;
    invalidNextTokenException?: any;
    statusCode: number;
    validationException?: any;
}
