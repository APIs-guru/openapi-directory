import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListContainerInstancesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListContainerInstancesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListContainerInstances = "AmazonEC2ContainerServiceV20141113.ListContainerInstances"
}
export declare class ListContainerInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListContainerInstancesXAmzTargetEnum;
}
export declare class ListContainerInstancesRequest extends SpeakeasyBase {
    queryParams: ListContainerInstancesQueryParams;
    headers: ListContainerInstancesHeaders;
    request: shared.ListContainerInstancesRequest;
}
export declare class ListContainerInstancesResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    listContainerInstancesResponse?: shared.ListContainerInstancesResponse;
    serverException?: any;
    statusCode: number;
}
