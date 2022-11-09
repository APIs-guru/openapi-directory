import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateIntegrationPathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
}
export declare class UpdateIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateIntegrationRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateIntegrationRequest extends SpeakeasyBase {
    pathParams: UpdateIntegrationPathParams;
    headers: UpdateIntegrationHeaders;
    request: UpdateIntegrationRequestBody;
}
export declare class UpdateIntegrationResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    integration?: shared.Integration;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
