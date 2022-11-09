import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribute } from "./attribute";
/**
 * Contains information about a computer account in a directory.
**/
export declare class Computer extends SpeakeasyBase {
    computerAttributes?: Attribute[];
    computerId?: string;
    computerName?: string;
}
