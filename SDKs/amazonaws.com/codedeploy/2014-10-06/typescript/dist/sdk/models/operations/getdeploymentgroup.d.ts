import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentGroup = "CodeDeploy_20141006.GetDeploymentGroup"
}
export declare class GetDeploymentGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentGroupXAmzTargetEnum;
}
export declare class GetDeploymentGroupRequest extends SpeakeasyBase {
    headers: GetDeploymentGroupHeaders;
    request: shared.GetDeploymentGroupInput;
}
export declare class GetDeploymentGroupResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    deploymentConfigDoesNotExistException?: any;
    deploymentGroupDoesNotExistException?: any;
    deploymentGroupNameRequiredException?: any;
    getDeploymentGroupOutput?: shared.GetDeploymentGroupOutput;
    invalidApplicationNameException?: any;
    invalidDeploymentGroupNameException?: any;
    statusCode: number;
}
