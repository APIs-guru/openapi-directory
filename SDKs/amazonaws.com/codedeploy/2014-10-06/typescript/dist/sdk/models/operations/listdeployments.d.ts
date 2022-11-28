import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeploymentsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListDeploymentsXAmzTargetEnum {
    CodeDeploy20141006ListDeployments = "CodeDeploy_20141006.ListDeployments"
}
export declare class ListDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentsXAmzTargetEnum;
}
export declare class ListDeploymentsRequest extends SpeakeasyBase {
    queryParams: ListDeploymentsQueryParams;
    headers: ListDeploymentsHeaders;
    request: shared.ListDeploymentsInput;
}
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    deploymentGroupDoesNotExistException?: any;
    deploymentGroupNameRequiredException?: any;
    invalidApplicationNameException?: any;
    invalidDeploymentGroupNameException?: any;
    invalidDeploymentStatusException?: any;
    invalidExternalIdException?: any;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    invalidTimeRangeException?: any;
    listDeploymentsOutput?: shared.ListDeploymentsOutput;
    statusCode: number;
}
