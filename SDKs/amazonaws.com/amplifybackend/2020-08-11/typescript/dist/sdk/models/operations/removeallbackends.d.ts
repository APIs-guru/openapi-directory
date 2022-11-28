import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveAllBackendsPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class RemoveAllBackendsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveAllBackendsRequestBody extends SpeakeasyBase {
    cleanAmplifyApp?: boolean;
}
export declare class RemoveAllBackendsRequest extends SpeakeasyBase {
    pathParams: RemoveAllBackendsPathParams;
    headers: RemoveAllBackendsHeaders;
    request: RemoveAllBackendsRequestBody;
}
export declare class RemoveAllBackendsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    removeAllBackendsResponse?: shared.RemoveAllBackendsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
