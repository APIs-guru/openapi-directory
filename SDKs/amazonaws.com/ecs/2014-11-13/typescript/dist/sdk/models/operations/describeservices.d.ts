import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeServicesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeServices = "AmazonEC2ContainerServiceV20141113.DescribeServices"
}
export declare class DescribeServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServicesXAmzTargetEnum;
}
export declare class DescribeServicesRequest extends SpeakeasyBase {
    headers: DescribeServicesHeaders;
    request: shared.DescribeServicesRequest;
}
export declare class DescribeServicesResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    describeServicesResponse?: shared.DescribeServicesResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
