import { SpeakeasyBase } from "../../../internal/utils";
import { KeyTypeEnum } from "./keytypeenum";
/**
 * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
**/
export declare class DeliveryStreamEncryptionConfigurationInput extends SpeakeasyBase {
    keyArn?: string;
    keyType: KeyTypeEnum;
}
