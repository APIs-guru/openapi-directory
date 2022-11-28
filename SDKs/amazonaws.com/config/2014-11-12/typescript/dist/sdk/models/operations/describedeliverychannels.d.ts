import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDeliveryChannelsXAmzTargetEnum {
    StarlingDoveServiceDescribeDeliveryChannels = "StarlingDoveService.DescribeDeliveryChannels"
}
export declare class DescribeDeliveryChannelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeliveryChannelsXAmzTargetEnum;
}
export declare class DescribeDeliveryChannelsRequest extends SpeakeasyBase {
    headers: DescribeDeliveryChannelsHeaders;
    request: shared.DescribeDeliveryChannelsRequest;
}
export declare class DescribeDeliveryChannelsResponse extends SpeakeasyBase {
    contentType: string;
    describeDeliveryChannelsResponse?: shared.DescribeDeliveryChannelsResponse;
    noSuchDeliveryChannelException?: any;
    statusCode: number;
}
