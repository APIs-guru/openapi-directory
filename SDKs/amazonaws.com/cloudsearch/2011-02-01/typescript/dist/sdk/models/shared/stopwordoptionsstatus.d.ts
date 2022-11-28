import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The stopword options configured for this search domain and the current status of those options.
**/
export declare class StopwordOptionsStatus extends SpeakeasyBase {
    options: string;
    status: OptionStatus;
}
