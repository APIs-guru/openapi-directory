import { SpeakeasyBase } from "../../../internal/utils";
import { KeystoreChainItems } from "./keystorechainitems";
export declare class KeystoreItems extends SpeakeasyBase {
    algorithm?: string;
    alias?: string;
    chain?: KeystoreChainItems[];
    entryType?: string;
    format?: string;
}
