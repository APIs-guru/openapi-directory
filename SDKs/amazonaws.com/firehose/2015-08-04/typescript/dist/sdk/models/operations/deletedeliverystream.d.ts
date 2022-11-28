import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDeliveryStreamXAmzTargetEnum {
    Firehose20150804DeleteDeliveryStream = "Firehose_20150804.DeleteDeliveryStream"
}
export declare class DeleteDeliveryStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeliveryStreamXAmzTargetEnum;
}
export declare class DeleteDeliveryStreamRequest extends SpeakeasyBase {
    headers: DeleteDeliveryStreamHeaders;
    request: shared.DeleteDeliveryStreamInput;
}
export declare class DeleteDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    deleteDeliveryStreamOutput?: Map<string, any>;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
