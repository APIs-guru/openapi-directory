import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureDescription } from "./failuredescription";
import { KeyTypeEnum } from "./keytypeenum";
import { DeliveryStreamEncryptionStatusEnum } from "./deliverystreamencryptionstatusenum";


// DeliveryStreamEncryptionConfiguration
/** 
 * Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. 
**/
export class DeliveryStreamEncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureDescription" })
  failureDescription?: FailureDescription;

  @Metadata({ data: "json, name=KeyARN" })
  keyArn?: string;

  @Metadata({ data: "json, name=KeyType" })
  keyType?: KeyTypeEnum;

  @Metadata({ data: "json, name=Status" })
  status?: DeliveryStreamEncryptionStatusEnum;
}
