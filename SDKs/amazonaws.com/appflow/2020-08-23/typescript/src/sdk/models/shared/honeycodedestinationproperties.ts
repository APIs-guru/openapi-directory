import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";



// HoneycodeDestinationProperties
/** 
 *  The properties that are applied when Amazon Honeycode is used as a destination. 
**/
export class HoneycodeDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
