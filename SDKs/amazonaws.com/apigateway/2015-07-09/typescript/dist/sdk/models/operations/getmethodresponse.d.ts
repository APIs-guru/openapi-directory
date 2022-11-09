import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMethodResponsePathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
    statusCode: string;
}
export declare class GetMethodResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMethodResponseRequest extends SpeakeasyBase {
    pathParams: GetMethodResponsePathParams;
    headers: GetMethodResponseHeaders;
}
export declare class GetMethodResponseResponse extends SpeakeasyBase {
    contentType: string;
    methodResponse?: shared.MethodResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
