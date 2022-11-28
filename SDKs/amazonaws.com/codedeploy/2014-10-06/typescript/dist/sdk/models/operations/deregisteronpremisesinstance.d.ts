import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006DeregisterOnPremisesInstance = "CodeDeploy_20141006.DeregisterOnPremisesInstance"
}
export declare class DeregisterOnPremisesInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterOnPremisesInstanceXAmzTargetEnum;
}
export declare class DeregisterOnPremisesInstanceRequest extends SpeakeasyBase {
    headers: DeregisterOnPremisesInstanceHeaders;
    request: shared.DeregisterOnPremisesInstanceInput;
}
export declare class DeregisterOnPremisesInstanceResponse extends SpeakeasyBase {
    contentType: string;
    instanceNameRequiredException?: any;
    invalidInstanceNameException?: any;
    statusCode: number;
}
