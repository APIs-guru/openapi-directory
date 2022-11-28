import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTaskSetsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeTaskSets = "AmazonEC2ContainerServiceV20141113.DescribeTaskSets"
}
export declare class DescribeTaskSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskSetsXAmzTargetEnum;
}
export declare class DescribeTaskSetsRequest extends SpeakeasyBase {
    headers: DescribeTaskSetsHeaders;
    request: shared.DescribeTaskSetsRequest;
}
export declare class DescribeTaskSetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    describeTaskSetsResponse?: shared.DescribeTaskSetsResponse;
    invalidParameterException?: any;
    serverException?: any;
    serviceNotActiveException?: any;
    serviceNotFoundException?: any;
    statusCode: number;
    unsupportedFeatureException?: any;
}
