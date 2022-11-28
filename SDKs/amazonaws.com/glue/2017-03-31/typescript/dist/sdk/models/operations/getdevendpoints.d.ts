import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevEndpointsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetDevEndpointsXAmzTargetEnum {
    AwsGlueGetDevEndpoints = "AWSGlue.GetDevEndpoints"
}
export declare class GetDevEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDevEndpointsXAmzTargetEnum;
}
export declare class GetDevEndpointsRequest extends SpeakeasyBase {
    queryParams: GetDevEndpointsQueryParams;
    headers: GetDevEndpointsHeaders;
    request: shared.GetDevEndpointsRequest;
}
export declare class GetDevEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getDevEndpointsResponse?: shared.GetDevEndpointsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
