import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKey } from "./publickey";
/**
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export declare class ListPublicKeysResponse extends SpeakeasyBase {
    nextToken?: string;
    publicKeyList?: PublicKey[];
}
