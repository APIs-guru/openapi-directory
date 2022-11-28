import { SpeakeasyBase } from "../../../internal/utils";
import { KeyTypeEnum } from "./keytypeenum";
import { Tag } from "./tag";
/**
 * Describes a key pair.
**/
export declare class KeyPairInfo extends SpeakeasyBase {
    keyFingerprint?: string;
    keyName?: string;
    keyPairId?: string;
    keyType?: KeyTypeEnum;
    tags?: Tag[];
}
