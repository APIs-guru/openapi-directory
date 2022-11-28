import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSecurityConfigurationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetSecurityConfigurationsXAmzTargetEnum {
    AwsGlueGetSecurityConfigurations = "AWSGlue.GetSecurityConfigurations"
}
export declare class GetSecurityConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSecurityConfigurationsXAmzTargetEnum;
}
export declare class GetSecurityConfigurationsRequest extends SpeakeasyBase {
    queryParams: GetSecurityConfigurationsQueryParams;
    headers: GetSecurityConfigurationsHeaders;
    request: shared.GetSecurityConfigurationsRequest;
}
export declare class GetSecurityConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getSecurityConfigurationsResponse?: shared.GetSecurityConfigurationsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
