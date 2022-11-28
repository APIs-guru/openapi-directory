import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDeliveryStreamXAmzTargetEnum {
    Firehose20150804DescribeDeliveryStream = "Firehose_20150804.DescribeDeliveryStream"
}
export declare class DescribeDeliveryStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeliveryStreamXAmzTargetEnum;
}
export declare class DescribeDeliveryStreamRequest extends SpeakeasyBase {
    headers: DescribeDeliveryStreamHeaders;
    request: shared.DescribeDeliveryStreamInput;
}
export declare class DescribeDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    describeDeliveryStreamOutput?: shared.DescribeDeliveryStreamOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
