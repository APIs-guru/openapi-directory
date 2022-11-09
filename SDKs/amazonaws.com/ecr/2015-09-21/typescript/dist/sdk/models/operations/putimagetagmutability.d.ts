import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutImageTagMutabilityXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutImageTagMutability = "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability"
}
export declare class PutImageTagMutabilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutImageTagMutabilityXAmzTargetEnum;
}
export declare class PutImageTagMutabilityRequest extends SpeakeasyBase {
    headers: PutImageTagMutabilityHeaders;
    request: shared.PutImageTagMutabilityRequest;
}
export declare class PutImageTagMutabilityResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putImageTagMutabilityResponse?: shared.PutImageTagMutabilityResponse;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
