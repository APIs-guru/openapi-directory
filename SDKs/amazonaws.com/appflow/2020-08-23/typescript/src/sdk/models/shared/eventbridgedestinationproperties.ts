import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";


// EventBridgeDestinationProperties
/** 
 *  The properties that are applied when Amazon EventBridge is being used as a destination. 
**/
export class EventBridgeDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @Metadata({ data: "json, name=object" })
  object: string;
}
