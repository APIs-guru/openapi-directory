import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTasksXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTasks = "AmazonEC2ContainerServiceV20141113.ListTasks"
}
export declare class ListTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTasksXAmzTargetEnum;
}
export declare class ListTasksRequest extends SpeakeasyBase {
    queryParams: ListTasksQueryParams;
    headers: ListTasksHeaders;
    request: shared.ListTasksRequest;
}
export declare class ListTasksResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    listTasksResponse?: shared.ListTasksResponse;
    serverException?: any;
    serviceNotFoundException?: any;
    statusCode: number;
}
