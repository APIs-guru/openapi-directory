import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartImageScanXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921StartImageScan = "AmazonEC2ContainerRegistry_V20150921.StartImageScan"
}
export declare class StartImageScanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImageScanXAmzTargetEnum;
}
export declare class StartImageScanRequest extends SpeakeasyBase {
    headers: StartImageScanHeaders;
    request: shared.StartImageScanRequest;
}
export declare class StartImageScanResponse extends SpeakeasyBase {
    contentType: string;
    imageNotFoundException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    startImageScanResponse?: shared.StartImageScanResponse;
    statusCode: number;
    unsupportedImageTypeException?: any;
}
