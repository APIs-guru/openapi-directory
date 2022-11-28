import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The synonym options configured for this search domain and the current status of those options.
**/
export declare class SynonymOptionsStatus extends SpeakeasyBase {
    options: string;
    status: OptionStatus;
}
