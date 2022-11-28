import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes = "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes"
}
export declare class DescribeCustomRoutingAcceleratorAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum;
}
export declare class DescribeCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
    headers: DescribeCustomRoutingAcceleratorAttributesHeaders;
    request: shared.DescribeCustomRoutingAcceleratorAttributesRequest;
}
export declare class DescribeCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    describeCustomRoutingAcceleratorAttributesResponse?: shared.DescribeCustomRoutingAcceleratorAttributesResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
