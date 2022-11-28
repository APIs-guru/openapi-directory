import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";



// EventBridgeDestinationProperties
/** 
 *  The properties that are applied when Amazon EventBridge is being used as a destination. 
**/
export class EventBridgeDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
