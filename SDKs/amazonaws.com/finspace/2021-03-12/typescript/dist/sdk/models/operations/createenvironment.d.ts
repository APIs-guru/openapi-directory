import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED",
    Local = "LOCAL"
}
/**
 * Configuration information when authentication mode is FEDERATED.
**/
export declare class CreateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
    applicationCallBackUrl?: string;
    attributeMap?: Map<string, string>;
    federationProviderName?: string;
    federationUrn?: string;
    samlMetadataDocument?: string;
    samlMetadataUrl?: string;
}
export declare class CreateEnvironmentRequestBody extends SpeakeasyBase {
    description?: string;
    federationMode?: CreateEnvironmentRequestBodyFederationModeEnum;
    federationParameters?: CreateEnvironmentRequestBodyFederationParameters;
    kmsKeyId?: string;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    headers: CreateEnvironmentHeaders;
    request: CreateEnvironmentRequestBody;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createEnvironmentResponse?: shared.CreateEnvironmentResponse;
    internalServerException?: any;
    limitExceededException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
