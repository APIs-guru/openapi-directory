import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForDeliveryStreamXAmzTargetEnum {
    Firehose20150804ListTagsForDeliveryStream = "Firehose_20150804.ListTagsForDeliveryStream"
}
export declare class ListTagsForDeliveryStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForDeliveryStreamXAmzTargetEnum;
}
export declare class ListTagsForDeliveryStreamRequest extends SpeakeasyBase {
    headers: ListTagsForDeliveryStreamHeaders;
    request: shared.ListTagsForDeliveryStreamInput;
}
export declare class ListTagsForDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    listTagsForDeliveryStreamOutput?: shared.ListTagsForDeliveryStreamOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
