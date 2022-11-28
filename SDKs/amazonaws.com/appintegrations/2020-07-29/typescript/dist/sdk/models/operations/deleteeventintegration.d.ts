import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEventIntegrationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteEventIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEventIntegrationRequest extends SpeakeasyBase {
    pathParams: DeleteEventIntegrationPathParams;
    headers: DeleteEventIntegrationHeaders;
}
export declare class DeleteEventIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteEventIntegrationResponse?: Map<string, any>;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
