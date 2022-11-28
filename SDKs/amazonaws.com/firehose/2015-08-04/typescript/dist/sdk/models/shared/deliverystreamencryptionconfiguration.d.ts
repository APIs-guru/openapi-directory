import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDescription } from "./failuredescription";
import { KeyTypeEnum } from "./keytypeenum";
import { DeliveryStreamEncryptionStatusEnum } from "./deliverystreamencryptionstatusenum";
/**
 * Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.
**/
export declare class DeliveryStreamEncryptionConfiguration extends SpeakeasyBase {
    failureDescription?: FailureDescription;
    keyArn?: string;
    keyType?: KeyTypeEnum;
    status?: DeliveryStreamEncryptionStatusEnum;
}
