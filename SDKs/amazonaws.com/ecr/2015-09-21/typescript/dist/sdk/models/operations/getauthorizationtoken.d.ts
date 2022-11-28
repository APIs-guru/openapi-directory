import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAuthorizationTokenXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetAuthorizationToken = "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken"
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
    request: shared.GetAuthorizationTokenRequest;
}
export declare class GetAuthorizationTokenResponse extends SpeakeasyBase {
    contentType: string;
    getAuthorizationTokenResponse?: shared.GetAuthorizationTokenResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
