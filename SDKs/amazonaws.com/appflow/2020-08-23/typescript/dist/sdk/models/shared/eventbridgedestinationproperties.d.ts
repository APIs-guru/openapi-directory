import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
/**
 *  The properties that are applied when Amazon EventBridge is being used as a destination.
**/
export declare class EventBridgeDestinationProperties extends SpeakeasyBase {
    errorHandlingConfig?: ErrorHandlingConfig;
    object: string;
}
