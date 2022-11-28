import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a key pair.
**/
export declare class KeyPair extends SpeakeasyBase {
    keyFingerprint?: string;
    keyMaterial?: string;
    keyName?: string;
    keyPairId?: string;
    tags?: Tag[];
}
