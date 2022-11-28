import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeEndpointGroup = "GlobalAccelerator_V20180706.DescribeEndpointGroup"
}
export declare class DescribeEndpointGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointGroupXAmzTargetEnum;
}
export declare class DescribeEndpointGroupRequest extends SpeakeasyBase {
    headers: DescribeEndpointGroupHeaders;
    request: shared.DescribeEndpointGroupRequest;
}
export declare class DescribeEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointGroupResponse?: shared.DescribeEndpointGroupResponse;
    endpointGroupNotFoundException?: any;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
