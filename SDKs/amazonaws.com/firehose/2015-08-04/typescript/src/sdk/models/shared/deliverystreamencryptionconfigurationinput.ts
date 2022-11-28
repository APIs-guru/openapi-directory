import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyTypeEnum } from "./keytypeenum";



// DeliveryStreamEncryptionConfigurationInput
/** 
 * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). 
**/
export class DeliveryStreamEncryptionConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyARN" })
  keyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyType" })
  keyType: KeyTypeEnum;
}
