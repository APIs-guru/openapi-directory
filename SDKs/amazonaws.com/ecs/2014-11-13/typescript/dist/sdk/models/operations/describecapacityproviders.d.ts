import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCapacityProvidersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeCapacityProviders = "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders"
}
export declare class DescribeCapacityProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCapacityProvidersXAmzTargetEnum;
}
export declare class DescribeCapacityProvidersRequest extends SpeakeasyBase {
    headers: DescribeCapacityProvidersHeaders;
    request: shared.DescribeCapacityProvidersRequest;
}
export declare class DescribeCapacityProvidersResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeCapacityProvidersResponse?: shared.DescribeCapacityProvidersResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
