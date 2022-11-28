import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateCapacityProvider = "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider"
}
export declare class CreateCapacityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCapacityProviderXAmzTargetEnum;
}
export declare class CreateCapacityProviderRequest extends SpeakeasyBase {
    headers: CreateCapacityProviderHeaders;
    request: shared.CreateCapacityProviderRequest;
}
export declare class CreateCapacityProviderResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createCapacityProviderResponse?: shared.CreateCapacityProviderResponse;
    invalidParameterException?: any;
    limitExceededException?: any;
    serverException?: any;
    statusCode: number;
    updateInProgressException?: any;
}
