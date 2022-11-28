import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDeliveryChannelStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeDeliveryChannelStatus = "StarlingDoveService.DescribeDeliveryChannelStatus"
}
export declare class DescribeDeliveryChannelStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeliveryChannelStatusXAmzTargetEnum;
}
export declare class DescribeDeliveryChannelStatusRequest extends SpeakeasyBase {
    headers: DescribeDeliveryChannelStatusHeaders;
    request: shared.DescribeDeliveryChannelStatusRequest;
}
export declare class DescribeDeliveryChannelStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeDeliveryChannelStatusResponse?: shared.DescribeDeliveryChannelStatusResponse;
    noSuchDeliveryChannelException?: any;
    statusCode: number;
}
