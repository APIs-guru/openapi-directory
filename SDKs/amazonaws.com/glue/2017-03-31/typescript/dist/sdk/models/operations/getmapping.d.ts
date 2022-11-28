import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMappingXAmzTargetEnum {
    AwsGlueGetMapping = "AWSGlue.GetMapping"
}
export declare class GetMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMappingXAmzTargetEnum;
}
export declare class GetMappingRequest extends SpeakeasyBase {
    headers: GetMappingHeaders;
    request: shared.GetMappingRequest;
}
export declare class GetMappingResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getMappingResponse?: shared.GetMappingResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
