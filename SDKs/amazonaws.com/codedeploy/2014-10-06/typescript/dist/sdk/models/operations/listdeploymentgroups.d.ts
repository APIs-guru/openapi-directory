import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeploymentGroupsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListDeploymentGroupsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentGroups = "CodeDeploy_20141006.ListDeploymentGroups"
}
export declare class ListDeploymentGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentGroupsXAmzTargetEnum;
}
export declare class ListDeploymentGroupsRequest extends SpeakeasyBase {
    queryParams: ListDeploymentGroupsQueryParams;
    headers: ListDeploymentGroupsHeaders;
    request: shared.ListDeploymentGroupsInput;
}
export declare class ListDeploymentGroupsResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    invalidApplicationNameException?: any;
    invalidNextTokenException?: any;
    listDeploymentGroupsOutput?: shared.ListDeploymentGroupsOutput;
    statusCode: number;
}
