import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTokenPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    pathParams: CreateTokenPathParams;
    headers: CreateTokenHeaders;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createTokenResponse?: shared.CreateTokenResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
