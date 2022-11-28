import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeploymentConfigsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListDeploymentConfigsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentConfigs = "CodeDeploy_20141006.ListDeploymentConfigs"
}
export declare class ListDeploymentConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentConfigsXAmzTargetEnum;
}
export declare class ListDeploymentConfigsRequest extends SpeakeasyBase {
    queryParams: ListDeploymentConfigsQueryParams;
    headers: ListDeploymentConfigsHeaders;
    request: shared.ListDeploymentConfigsInput;
}
export declare class ListDeploymentConfigsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listDeploymentConfigsOutput?: shared.ListDeploymentConfigsOutput;
    statusCode: number;
}
