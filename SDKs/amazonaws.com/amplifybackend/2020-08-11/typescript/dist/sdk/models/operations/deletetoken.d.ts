import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTokenPathParams extends SpeakeasyBase {
    appId: string;
    sessionId: string;
}
export declare class DeleteTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTokenRequest extends SpeakeasyBase {
    pathParams: DeleteTokenPathParams;
    headers: DeleteTokenHeaders;
}
export declare class DeleteTokenResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteTokenResponse?: shared.DeleteTokenResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
