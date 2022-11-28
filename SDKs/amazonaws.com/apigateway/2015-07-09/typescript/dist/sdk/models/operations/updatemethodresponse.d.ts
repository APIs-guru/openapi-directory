import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMethodResponsePathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
    statusCode: string;
}
export declare class UpdateMethodResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateMethodResponseRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateMethodResponseRequest extends SpeakeasyBase {
    pathParams: UpdateMethodResponsePathParams;
    headers: UpdateMethodResponseHeaders;
    request: UpdateMethodResponseRequestBody;
}
export declare class UpdateMethodResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    methodResponse?: shared.MethodResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
