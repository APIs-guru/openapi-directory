import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputConfiguration } from "./inputconfiguration";
import { InputDefinition } from "./inputdefinition";


// Input
/** 
 * Information about the input.
**/
export class Input extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfiguration" })
  inputConfiguration?: InputConfiguration;

  @Metadata({ data: "json, name=inputDefinition" })
  inputDefinition?: InputDefinition;
}
