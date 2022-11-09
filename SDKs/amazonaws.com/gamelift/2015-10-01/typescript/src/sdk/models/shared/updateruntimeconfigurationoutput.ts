import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";


// UpdateRuntimeConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateRuntimeConfigurationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;
}
