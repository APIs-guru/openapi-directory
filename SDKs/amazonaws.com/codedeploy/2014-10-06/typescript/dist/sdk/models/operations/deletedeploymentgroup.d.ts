import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006DeleteDeploymentGroup = "CodeDeploy_20141006.DeleteDeploymentGroup"
}
export declare class DeleteDeploymentGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeploymentGroupXAmzTargetEnum;
}
export declare class DeleteDeploymentGroupRequest extends SpeakeasyBase {
    headers: DeleteDeploymentGroupHeaders;
    request: shared.DeleteDeploymentGroupInput;
}
export declare class DeleteDeploymentGroupResponse extends SpeakeasyBase {
    applicationNameRequiredException?: any;
    contentType: string;
    deleteDeploymentGroupOutput?: shared.DeleteDeploymentGroupOutput;
    deploymentGroupNameRequiredException?: any;
    invalidApplicationNameException?: any;
    invalidDeploymentGroupNameException?: any;
    invalidRoleException?: any;
    statusCode: number;
}
