import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagDeliveryStreamXAmzTargetEnum {
    Firehose20150804TagDeliveryStream = "Firehose_20150804.TagDeliveryStream"
}
export declare class TagDeliveryStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagDeliveryStreamXAmzTargetEnum;
}
export declare class TagDeliveryStreamRequest extends SpeakeasyBase {
    headers: TagDeliveryStreamHeaders;
    request: shared.TagDeliveryStreamInput;
}
export declare class TagDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagDeliveryStreamOutput?: Map<string, any>;
}
