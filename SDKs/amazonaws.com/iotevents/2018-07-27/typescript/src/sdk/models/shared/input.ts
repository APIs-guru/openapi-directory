import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfiguration } from "./inputconfiguration";
import { InputDefinition } from "./inputdefinition";



// Input
/** 
 * Information about the input.
**/
export class Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfiguration" })
  inputConfiguration?: InputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=inputDefinition" })
  inputDefinition?: InputDefinition;
}
