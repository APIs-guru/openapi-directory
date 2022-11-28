import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeAccelerator = "GlobalAccelerator_V20180706.DescribeAccelerator"
}
export declare class DescribeAcceleratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAcceleratorXAmzTargetEnum;
}
export declare class DescribeAcceleratorRequest extends SpeakeasyBase {
    headers: DescribeAcceleratorHeaders;
    request: shared.DescribeAcceleratorRequest;
}
export declare class DescribeAcceleratorResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    describeAcceleratorResponse?: shared.DescribeAcceleratorResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
