import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartDeliveryStreamEncryptionXAmzTargetEnum {
    Firehose20150804StartDeliveryStreamEncryption = "Firehose_20150804.StartDeliveryStreamEncryption"
}
export declare class StartDeliveryStreamEncryptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDeliveryStreamEncryptionXAmzTargetEnum;
}
export declare class StartDeliveryStreamEncryptionRequest extends SpeakeasyBase {
    headers: StartDeliveryStreamEncryptionHeaders;
    request: shared.StartDeliveryStreamEncryptionInput;
}
export declare class StartDeliveryStreamEncryptionResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    invalidKmsResourceException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    startDeliveryStreamEncryptionOutput?: Map<string, any>;
    statusCode: number;
}
