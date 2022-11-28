import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateEventIntegrationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class UpdateEventIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEventIntegrationRequestBody extends SpeakeasyBase {
    description?: string;
}
export declare class UpdateEventIntegrationRequest extends SpeakeasyBase {
    pathParams: UpdateEventIntegrationPathParams;
    headers: UpdateEventIntegrationHeaders;
    request: UpdateEventIntegrationRequestBody;
}
export declare class UpdateEventIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEventIntegrationResponse?: Map<string, any>;
}
