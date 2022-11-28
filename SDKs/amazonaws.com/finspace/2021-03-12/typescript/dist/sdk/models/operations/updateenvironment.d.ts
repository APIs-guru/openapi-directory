import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEnvironmentPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class UpdateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED",
    Local = "LOCAL"
}
/**
 * Configuration information when authentication mode is FEDERATED.
**/
export declare class UpdateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
    applicationCallBackUrl?: string;
    attributeMap?: Map<string, string>;
    federationProviderName?: string;
    federationUrn?: string;
    samlMetadataDocument?: string;
    samlMetadataUrl?: string;
}
export declare class UpdateEnvironmentRequestBody extends SpeakeasyBase {
    description?: string;
    federationMode?: UpdateEnvironmentRequestBodyFederationModeEnum;
    federationParameters?: UpdateEnvironmentRequestBodyFederationParameters;
    name?: string;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    pathParams: UpdateEnvironmentPathParams;
    headers: UpdateEnvironmentHeaders;
    request: UpdateEnvironmentRequestBody;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEnvironmentResponse?: shared.UpdateEnvironmentResponse;
    validationException?: any;
}
