import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterContainerInstanceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RegisterContainerInstance = "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance"
}
export declare class RegisterContainerInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterContainerInstanceXAmzTargetEnum;
}
export declare class RegisterContainerInstanceRequest extends SpeakeasyBase {
    headers: RegisterContainerInstanceHeaders;
    request: shared.RegisterContainerInstanceRequest;
}
export declare class RegisterContainerInstanceResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    registerContainerInstanceResponse?: shared.RegisterContainerInstanceResponse;
    serverException?: any;
    statusCode: number;
}
