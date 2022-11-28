import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingAccelerator = "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator"
}
export declare class DescribeCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class DescribeCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    headers: DescribeCustomRoutingAcceleratorHeaders;
    request: shared.DescribeCustomRoutingAcceleratorRequest;
}
export declare class DescribeCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    describeCustomRoutingAcceleratorResponse?: shared.DescribeCustomRoutingAcceleratorResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
