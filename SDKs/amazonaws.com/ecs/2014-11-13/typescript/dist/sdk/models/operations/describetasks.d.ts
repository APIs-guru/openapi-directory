import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTasksXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeTasks = "AmazonEC2ContainerServiceV20141113.DescribeTasks"
}
export declare class DescribeTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTasksXAmzTargetEnum;
}
export declare class DescribeTasksRequest extends SpeakeasyBase {
    headers: DescribeTasksHeaders;
    request: shared.DescribeTasksRequest;
}
export declare class DescribeTasksResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    describeTasksResponse?: shared.DescribeTasksResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
