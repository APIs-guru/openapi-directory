import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchDeleteImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchDeleteImage = "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage"
}
export declare class BatchDeleteImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteImageXAmzTargetEnum;
}
export declare class BatchDeleteImageRequest extends SpeakeasyBase {
    headers: BatchDeleteImageHeaders;
    request: shared.BatchDeleteImageRequest;
}
export declare class BatchDeleteImageResponse extends SpeakeasyBase {
    batchDeleteImageResponse?: shared.BatchDeleteImageResponse;
    contentType: string;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
