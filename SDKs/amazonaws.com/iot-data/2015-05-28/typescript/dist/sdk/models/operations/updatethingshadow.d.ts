import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateThingShadowPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class UpdateThingShadowQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateThingShadowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateThingShadowRequestBody extends SpeakeasyBase {
    payload: string;
}
export declare class UpdateThingShadowRequest extends SpeakeasyBase {
    pathParams: UpdateThingShadowPathParams;
    queryParams: UpdateThingShadowQueryParams;
    headers: UpdateThingShadowHeaders;
    request: UpdateThingShadowRequestBody;
}
export declare class UpdateThingShadowResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    methodNotAllowedException?: any;
    requestEntityTooLargeException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    unsupportedDocumentEncodingException?: any;
    updateThingShadowResponse?: shared.UpdateThingShadowResponse;
}
