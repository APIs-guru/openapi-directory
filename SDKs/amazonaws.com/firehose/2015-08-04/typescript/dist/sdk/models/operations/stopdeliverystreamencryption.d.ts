import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopDeliveryStreamEncryptionXAmzTargetEnum {
    Firehose20150804StopDeliveryStreamEncryption = "Firehose_20150804.StopDeliveryStreamEncryption"
}
export declare class StopDeliveryStreamEncryptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDeliveryStreamEncryptionXAmzTargetEnum;
}
export declare class StopDeliveryStreamEncryptionRequest extends SpeakeasyBase {
    headers: StopDeliveryStreamEncryptionHeaders;
    request: shared.StopDeliveryStreamEncryptionInput;
}
export declare class StopDeliveryStreamEncryptionResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopDeliveryStreamEncryptionOutput?: Map<string, any>;
}
