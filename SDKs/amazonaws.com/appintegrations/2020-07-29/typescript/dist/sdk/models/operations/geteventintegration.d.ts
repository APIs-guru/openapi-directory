import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEventIntegrationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetEventIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEventIntegrationRequest extends SpeakeasyBase {
    pathParams: GetEventIntegrationPathParams;
    headers: GetEventIntegrationHeaders;
}
export declare class GetEventIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEventIntegrationResponse?: shared.GetEventIntegrationResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
