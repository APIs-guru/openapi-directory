import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RegisterTaskDefinition = "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition"
}
export declare class RegisterTaskDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterTaskDefinitionXAmzTargetEnum;
}
export declare class RegisterTaskDefinitionRequest extends SpeakeasyBase {
    headers: RegisterTaskDefinitionHeaders;
    request: shared.RegisterTaskDefinitionRequest;
}
export declare class RegisterTaskDefinitionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    registerTaskDefinitionResponse?: shared.RegisterTaskDefinitionResponse;
    serverException?: any;
    statusCode: number;
}
