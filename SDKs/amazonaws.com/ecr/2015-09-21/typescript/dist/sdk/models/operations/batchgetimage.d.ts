import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchGetImageXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchGetImage = "AmazonEC2ContainerRegistry_V20150921.BatchGetImage"
}
export declare class BatchGetImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetImageXAmzTargetEnum;
}
export declare class BatchGetImageRequest extends SpeakeasyBase {
    headers: BatchGetImageHeaders;
    request: shared.BatchGetImageRequest;
}
export declare class BatchGetImageResponse extends SpeakeasyBase {
    batchGetImageResponse?: shared.BatchGetImageResponse;
    contentType: string;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
