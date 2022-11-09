import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";


// HoneycodeDestinationProperties
/** 
 *  The properties that are applied when Amazon Honeycode is used as a destination. 
**/
export class HoneycodeDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @Metadata({ data: "json, name=object" })
  object: string;
}
