import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeploymentInstancesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentInstances = "CodeDeploy_20141006.ListDeploymentInstances"
}
export declare class ListDeploymentInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentInstancesXAmzTargetEnum;
}
export declare class ListDeploymentInstancesRequest extends SpeakeasyBase {
    queryParams: ListDeploymentInstancesQueryParams;
    headers: ListDeploymentInstancesHeaders;
    request: shared.ListDeploymentInstancesInput;
}
export declare class ListDeploymentInstancesResponse extends SpeakeasyBase {
    contentType: string;
    deploymentDoesNotExistException?: any;
    deploymentIdRequiredException?: any;
    deploymentNotStartedException?: any;
    invalidComputePlatformException?: any;
    invalidDeploymentIdException?: any;
    invalidDeploymentInstanceTypeException?: any;
    invalidInstanceStatusException?: any;
    invalidInstanceTypeException?: any;
    invalidNextTokenException?: any;
    invalidTargetFilterNameException?: any;
    listDeploymentInstancesOutput?: shared.ListDeploymentInstancesOutput;
    statusCode: number;
}
