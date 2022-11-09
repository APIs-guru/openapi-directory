import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ImportComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ImportComponentRequestBodyFormatEnum {
    Shell = "SHELL"
}
export declare enum ImportComponentRequestBodyPlatformEnum {
    Windows = "Windows",
    Linux = "Linux"
}
export declare enum ImportComponentRequestBodyTypeEnum {
    Build = "BUILD",
    Test = "TEST"
}
export declare class ImportComponentRequestBody extends SpeakeasyBase {
    changeDescription?: string;
    clientToken: string;
    data?: string;
    description?: string;
    format: ImportComponentRequestBodyFormatEnum;
    kmsKeyId?: string;
    name: string;
    platform: ImportComponentRequestBodyPlatformEnum;
    semanticVersion: string;
    tags?: Map<string, string>;
    type: ImportComponentRequestBodyTypeEnum;
    uri?: string;
}
export declare class ImportComponentRequest extends SpeakeasyBase {
    headers: ImportComponentHeaders;
    request: ImportComponentRequestBody;
}
export declare class ImportComponentResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    importComponentResponse?: shared.ImportComponentResponse;
    invalidParameterCombinationException?: any;
    invalidRequestException?: any;
    invalidVersionNumberException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
