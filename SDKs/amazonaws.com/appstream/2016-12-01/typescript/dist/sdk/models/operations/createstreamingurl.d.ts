import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStreamingUrlxAmzTargetEnum {
    PhotonAdminProxyServiceCreateStreamingUrl = "PhotonAdminProxyService.CreateStreamingURL"
}
export declare class CreateStreamingUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStreamingUrlxAmzTargetEnum;
}
export declare class CreateStreamingUrlRequest extends SpeakeasyBase {
    headers: CreateStreamingUrlHeaders;
    request: shared.CreateStreamingUrlRequest;
}
export declare class CreateStreamingUrlResponse extends SpeakeasyBase {
    contentType: string;
    createStreamingUrlResult?: shared.CreateStreamingUrlResult;
    invalidParameterCombinationException?: any;
    operationNotPermittedException?: any;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
