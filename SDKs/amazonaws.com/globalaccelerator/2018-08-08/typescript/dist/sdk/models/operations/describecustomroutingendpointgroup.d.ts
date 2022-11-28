import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup"
}
export declare class DescribeCustomRoutingEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingEndpointGroupXAmzTargetEnum;
}
export declare class DescribeCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
    headers: DescribeCustomRoutingEndpointGroupHeaders;
    request: shared.DescribeCustomRoutingEndpointGroupRequest;
}
export declare class DescribeCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeCustomRoutingEndpointGroupResponse?: shared.DescribeCustomRoutingEndpointGroupResponse;
    endpointGroupNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
