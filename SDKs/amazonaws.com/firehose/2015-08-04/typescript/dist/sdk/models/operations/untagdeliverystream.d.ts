import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagDeliveryStreamXAmzTargetEnum {
    Firehose20150804UntagDeliveryStream = "Firehose_20150804.UntagDeliveryStream"
}
export declare class UntagDeliveryStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagDeliveryStreamXAmzTargetEnum;
}
export declare class UntagDeliveryStreamRequest extends SpeakeasyBase {
    headers: UntagDeliveryStreamHeaders;
    request: shared.UntagDeliveryStreamInput;
}
export declare class UntagDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    untagDeliveryStreamOutput?: Map<string, any>;
}
