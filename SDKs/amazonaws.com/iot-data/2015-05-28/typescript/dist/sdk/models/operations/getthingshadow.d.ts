import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThingShadowPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class GetThingShadowQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class GetThingShadowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetThingShadowRequest extends SpeakeasyBase {
    pathParams: GetThingShadowPathParams;
    queryParams: GetThingShadowQueryParams;
    headers: GetThingShadowHeaders;
}
export declare class GetThingShadowResponse extends SpeakeasyBase {
    contentType: string;
    getThingShadowResponse?: shared.GetThingShadowResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    methodNotAllowedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    unsupportedDocumentEncodingException?: any;
}
