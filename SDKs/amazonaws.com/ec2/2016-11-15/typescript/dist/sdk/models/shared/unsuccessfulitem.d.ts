import { SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulItemError } from "./unsuccessfulitemerror";
/**
 * Information about items that were not successfully processed in a batch call.
**/
export declare class UnsuccessfulItem extends SpeakeasyBase {
    error?: UnsuccessfulItemError;
    resourceId?: string;
}
