import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMethodPathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
}
export declare class GetMethodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMethodRequest extends SpeakeasyBase {
    pathParams: GetMethodPathParams;
    headers: GetMethodHeaders;
}
export declare class GetMethodResponse extends SpeakeasyBase {
    contentType: string;
    method?: shared.Method;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
