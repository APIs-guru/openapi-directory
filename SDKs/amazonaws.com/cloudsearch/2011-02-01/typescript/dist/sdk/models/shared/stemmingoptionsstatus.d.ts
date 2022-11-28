import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The stemming options configured for this search domain and the current status of those options.
**/
export declare class StemmingOptionsStatus extends SpeakeasyBase {
    options: string;
    status: OptionStatus;
}
