import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeListener = "GlobalAccelerator_V20180706.DescribeListener"
}
export declare class DescribeListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeListenerXAmzTargetEnum;
}
export declare class DescribeListenerRequest extends SpeakeasyBase {
    headers: DescribeListenerHeaders;
    request: shared.DescribeListenerRequest;
}
export declare class DescribeListenerResponse extends SpeakeasyBase {
    contentType: string;
    describeListenerResponse?: shared.DescribeListenerResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    listenerNotFoundException?: any;
    statusCode: number;
}
