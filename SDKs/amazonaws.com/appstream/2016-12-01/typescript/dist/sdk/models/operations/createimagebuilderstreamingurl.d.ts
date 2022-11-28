import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateImageBuilderStreamingUrlxAmzTargetEnum {
    PhotonAdminProxyServiceCreateImageBuilderStreamingUrl = "PhotonAdminProxyService.CreateImageBuilderStreamingURL"
}
export declare class CreateImageBuilderStreamingUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageBuilderStreamingUrlxAmzTargetEnum;
}
export declare class CreateImageBuilderStreamingUrlRequest extends SpeakeasyBase {
    headers: CreateImageBuilderStreamingUrlHeaders;
    request: shared.CreateImageBuilderStreamingUrlRequest;
}
export declare class CreateImageBuilderStreamingUrlResponse extends SpeakeasyBase {
    contentType: string;
    createImageBuilderStreamingUrlResult?: shared.CreateImageBuilderStreamingUrlResult;
    operationNotPermittedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
