import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteCapacityProvider = "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider"
}
export declare class DeleteCapacityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCapacityProviderXAmzTargetEnum;
}
export declare class DeleteCapacityProviderRequest extends SpeakeasyBase {
    headers: DeleteCapacityProviderHeaders;
    request: shared.DeleteCapacityProviderRequest;
}
export declare class DeleteCapacityProviderResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteCapacityProviderResponse?: shared.DeleteCapacityProviderResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
