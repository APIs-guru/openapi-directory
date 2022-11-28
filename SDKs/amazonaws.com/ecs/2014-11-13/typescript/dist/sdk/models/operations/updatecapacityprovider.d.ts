import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateCapacityProvider = "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider"
}
export declare class UpdateCapacityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCapacityProviderXAmzTargetEnum;
}
export declare class UpdateCapacityProviderRequest extends SpeakeasyBase {
    headers: UpdateCapacityProviderHeaders;
    request: shared.UpdateCapacityProviderRequest;
}
export declare class UpdateCapacityProviderResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    updateCapacityProviderResponse?: shared.UpdateCapacityProviderResponse;
}
