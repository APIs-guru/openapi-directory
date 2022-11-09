import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateEventIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The event filter.
**/
export declare class CreateEventIntegrationRequestBodyEventFilter extends SpeakeasyBase {
    source?: string;
}
export declare class CreateEventIntegrationRequestBody extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    eventBridgeBus: string;
    eventFilter: CreateEventIntegrationRequestBodyEventFilter;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateEventIntegrationRequest extends SpeakeasyBase {
    headers: CreateEventIntegrationHeaders;
    request: CreateEventIntegrationRequestBody;
}
export declare class CreateEventIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createEventIntegrationResponse?: shared.CreateEventIntegrationResponse;
    duplicateResourceException?: any;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
