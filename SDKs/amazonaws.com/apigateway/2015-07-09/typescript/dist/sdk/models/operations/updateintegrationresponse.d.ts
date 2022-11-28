import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIntegrationResponsePathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
    statusCode: string;
}
export declare class UpdateIntegrationResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateIntegrationResponseRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateIntegrationResponseRequest extends SpeakeasyBase {
    pathParams: UpdateIntegrationResponsePathParams;
    headers: UpdateIntegrationResponseHeaders;
    request: UpdateIntegrationResponseRequestBody;
}
export declare class UpdateIntegrationResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    integrationResponse?: shared.IntegrationResponse;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
