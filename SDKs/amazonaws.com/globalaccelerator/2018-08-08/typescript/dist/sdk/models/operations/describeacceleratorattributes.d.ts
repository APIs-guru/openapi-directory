import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeAcceleratorAttributes = "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes"
}
export declare class DescribeAcceleratorAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAcceleratorAttributesXAmzTargetEnum;
}
export declare class DescribeAcceleratorAttributesRequest extends SpeakeasyBase {
    headers: DescribeAcceleratorAttributesHeaders;
    request: shared.DescribeAcceleratorAttributesRequest;
}
export declare class DescribeAcceleratorAttributesResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    describeAcceleratorAttributesResponse?: shared.DescribeAcceleratorAttributesResponse;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    statusCode: number;
}
