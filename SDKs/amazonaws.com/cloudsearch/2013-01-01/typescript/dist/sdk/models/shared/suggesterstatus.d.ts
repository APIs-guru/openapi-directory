import { SpeakeasyBase } from "../../../internal/utils";
import { Suggester } from "./suggester";
import { OptionStatus } from "./optionstatus";
/**
 * The value of a <code>Suggester</code> and its current status.
**/
export declare class SuggesterStatus extends SpeakeasyBase {
    options: Suggester;
    status: OptionStatus;
}
