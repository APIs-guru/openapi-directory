import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutImageScanningConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutImageScanningConfiguration = "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration"
}
export declare class PutImageScanningConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutImageScanningConfigurationXAmzTargetEnum;
}
export declare class PutImageScanningConfigurationRequest extends SpeakeasyBase {
    headers: PutImageScanningConfigurationHeaders;
    request: shared.PutImageScanningConfigurationRequest;
}
export declare class PutImageScanningConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putImageScanningConfigurationResponse?: shared.PutImageScanningConfigurationResponse;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
