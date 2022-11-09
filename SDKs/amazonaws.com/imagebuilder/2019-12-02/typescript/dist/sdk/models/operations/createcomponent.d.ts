import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateComponentRequestBodyPlatformEnum {
    Windows = "Windows",
    Linux = "Linux"
}
export declare class CreateComponentRequestBody extends SpeakeasyBase {
    changeDescription?: string;
    clientToken: string;
    data?: string;
    description?: string;
    kmsKeyId?: string;
    name: string;
    platform: CreateComponentRequestBodyPlatformEnum;
    semanticVersion: string;
    supportedOsVersions?: string[];
    tags?: Map<string, string>;
    uri?: string;
}
export declare class CreateComponentRequest extends SpeakeasyBase {
    headers: CreateComponentHeaders;
    request: CreateComponentRequestBody;
}
export declare class CreateComponentResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    createComponentResponse?: shared.CreateComponentResponse;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidParameterCombinationException?: any;
    invalidRequestException?: any;
    invalidVersionNumberException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceQuotaExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
