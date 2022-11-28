import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingListener = "GlobalAccelerator_V20180706.DescribeCustomRoutingListener"
}
export declare class DescribeCustomRoutingListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingListenerXAmzTargetEnum;
}
export declare class DescribeCustomRoutingListenerRequest extends SpeakeasyBase {
    headers: DescribeCustomRoutingListenerHeaders;
    request: shared.DescribeCustomRoutingListenerRequest;
}
export declare class DescribeCustomRoutingListenerResponse extends SpeakeasyBase {
    contentType: string;
    describeCustomRoutingListenerResponse?: shared.DescribeCustomRoutingListenerResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
}
