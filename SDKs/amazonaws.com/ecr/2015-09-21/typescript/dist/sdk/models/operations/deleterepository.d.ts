import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteRepositoryXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteRepository = "AmazonEC2ContainerRegistry_V20150921.DeleteRepository"
}
export declare class DeleteRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRepositoryXAmzTargetEnum;
}
export declare class DeleteRepositoryRequest extends SpeakeasyBase {
    headers: DeleteRepositoryHeaders;
    request: shared.DeleteRepositoryRequest;
}
export declare class DeleteRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    deleteRepositoryResponse?: shared.DeleteRepositoryResponse;
    invalidParameterException?: any;
    kmsException?: any;
    repositoryNotEmptyException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
