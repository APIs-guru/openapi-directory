import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyTypeEnum } from "./keytypeenum";


// DeliveryStreamEncryptionConfigurationInput
/** 
 * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). 
**/
export class DeliveryStreamEncryptionConfigurationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyARN" })
  keyArn?: string;

  @Metadata({ data: "json, name=KeyType" })
  keyType: KeyTypeEnum;
}
