import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeregisterTaskDefinition = "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition"
}
export declare class DeregisterTaskDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterTaskDefinitionXAmzTargetEnum;
}
export declare class DeregisterTaskDefinitionRequest extends SpeakeasyBase {
    headers: DeregisterTaskDefinitionHeaders;
    request: shared.DeregisterTaskDefinitionRequest;
}
export declare class DeregisterTaskDefinitionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deregisterTaskDefinitionResponse?: shared.DeregisterTaskDefinitionResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
