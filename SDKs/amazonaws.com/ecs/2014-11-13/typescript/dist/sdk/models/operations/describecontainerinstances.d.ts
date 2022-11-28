import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeContainerInstancesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeContainerInstances = "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances"
}
export declare class DescribeContainerInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContainerInstancesXAmzTargetEnum;
}
export declare class DescribeContainerInstancesRequest extends SpeakeasyBase {
    headers: DescribeContainerInstancesHeaders;
    request: shared.DescribeContainerInstancesRequest;
}
export declare class DescribeContainerInstancesResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    describeContainerInstancesResponse?: shared.DescribeContainerInstancesResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
