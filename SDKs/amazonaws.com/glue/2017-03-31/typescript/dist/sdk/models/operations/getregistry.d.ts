import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRegistryXAmzTargetEnum {
    AwsGlueGetRegistry = "AWSGlue.GetRegistry"
}
export declare class GetRegistryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegistryXAmzTargetEnum;
}
export declare class GetRegistryRequest extends SpeakeasyBase {
    headers: GetRegistryHeaders;
    request: shared.GetRegistryInput;
}
export declare class GetRegistryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getRegistryResponse?: shared.GetRegistryResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
}
