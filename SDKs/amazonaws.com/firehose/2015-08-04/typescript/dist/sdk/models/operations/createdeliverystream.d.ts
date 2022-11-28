import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDeliveryStreamXAmzTargetEnum {
    Firehose20150804CreateDeliveryStream = "Firehose_20150804.CreateDeliveryStream"
}
export declare class CreateDeliveryStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeliveryStreamXAmzTargetEnum;
}
export declare class CreateDeliveryStreamRequest extends SpeakeasyBase {
    headers: CreateDeliveryStreamHeaders;
    request: shared.CreateDeliveryStreamInput;
}
export declare class CreateDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    createDeliveryStreamOutput?: shared.CreateDeliveryStreamOutput;
    invalidArgumentException?: any;
    invalidKmsResourceException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
