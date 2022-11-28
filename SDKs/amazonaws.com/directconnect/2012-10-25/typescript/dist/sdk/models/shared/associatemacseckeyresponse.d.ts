import { SpeakeasyBase } from "../../../internal/utils";
import { MacSecKey } from "./macseckey";
export declare class AssociateMacSecKeyResponse extends SpeakeasyBase {
    connectionId?: string;
    macSecKeys?: MacSecKey[];
}
