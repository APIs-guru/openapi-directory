import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
/**
 *  The properties that are applied when Amazon Honeycode is used as a destination.
**/
export declare class HoneycodeDestinationProperties extends SpeakeasyBase {
    errorHandlingConfig?: ErrorHandlingConfig;
    object: string;
}
