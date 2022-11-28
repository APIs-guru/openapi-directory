import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The status and configuration of the domain's availability options.
**/
export declare class AvailabilityOptionsStatus extends SpeakeasyBase {
    options: boolean;
    status: OptionStatus;
}
