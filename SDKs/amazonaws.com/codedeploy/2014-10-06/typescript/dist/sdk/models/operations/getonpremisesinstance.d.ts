import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006GetOnPremisesInstance = "CodeDeploy_20141006.GetOnPremisesInstance"
}
export declare class GetOnPremisesInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOnPremisesInstanceXAmzTargetEnum;
}
export declare class GetOnPremisesInstanceRequest extends SpeakeasyBase {
    headers: GetOnPremisesInstanceHeaders;
    request: shared.GetOnPremisesInstanceInput;
}
export declare class GetOnPremisesInstanceResponse extends SpeakeasyBase {
    contentType: string;
    getOnPremisesInstanceOutput?: shared.GetOnPremisesInstanceOutput;
    instanceNameRequiredException?: any;
    instanceNotRegisteredException?: any;
    invalidInstanceNameException?: any;
    statusCode: number;
}
