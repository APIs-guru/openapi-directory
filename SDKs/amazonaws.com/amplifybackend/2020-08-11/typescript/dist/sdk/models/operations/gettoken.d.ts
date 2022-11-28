import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTokenPathParams extends SpeakeasyBase {
    appId: string;
    sessionId: string;
}
export declare class GetTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTokenRequest extends SpeakeasyBase {
    pathParams: GetTokenPathParams;
    headers: GetTokenHeaders;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    getTokenResponse?: shared.GetTokenResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
