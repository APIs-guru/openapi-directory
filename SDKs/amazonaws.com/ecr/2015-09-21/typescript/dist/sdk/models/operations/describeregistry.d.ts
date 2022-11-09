import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeRegistryXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeRegistry = "AmazonEC2ContainerRegistry_V20150921.DescribeRegistry"
}
export declare class DescribeRegistryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRegistryXAmzTargetEnum;
}
export declare class DescribeRegistryRequest extends SpeakeasyBase {
    headers: DescribeRegistryHeaders;
    request: Map<string, any>;
}
export declare class DescribeRegistryResponse extends SpeakeasyBase {
    contentType: string;
    describeRegistryResponse?: shared.DescribeRegistryResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    validationException?: any;
}
