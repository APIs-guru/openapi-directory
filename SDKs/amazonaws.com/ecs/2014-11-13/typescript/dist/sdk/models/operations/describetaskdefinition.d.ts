import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeTaskDefinition = "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition"
}
export declare class DescribeTaskDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskDefinitionXAmzTargetEnum;
}
export declare class DescribeTaskDefinitionRequest extends SpeakeasyBase {
    headers: DescribeTaskDefinitionHeaders;
    request: shared.DescribeTaskDefinitionRequest;
}
export declare class DescribeTaskDefinitionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeTaskDefinitionResponse?: shared.DescribeTaskDefinitionResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
