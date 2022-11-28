import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
export declare class KeysAndAttributes extends SpeakeasyBase {
    attributesToGet?: string[];
    consistentRead?: boolean;
    keys: Key[];
}
