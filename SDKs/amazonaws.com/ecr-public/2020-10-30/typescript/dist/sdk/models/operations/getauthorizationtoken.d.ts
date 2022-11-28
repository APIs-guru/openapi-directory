import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAuthorizationTokenXAmzTargetEnum {
    SpencerFrontendServiceGetAuthorizationToken = "SpencerFrontendService.GetAuthorizationToken"
}
export declare class GetAuthorizationTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAuthorizationTokenXAmzTargetEnum;
}
export declare class GetAuthorizationTokenRequest extends SpeakeasyBase {
    headers: GetAuthorizationTokenHeaders;
    request: Map<string, any>;
}
export declare class GetAuthorizationTokenResponse extends SpeakeasyBase {
    contentType: string;
    getAuthorizationTokenResponse?: shared.GetAuthorizationTokenResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
