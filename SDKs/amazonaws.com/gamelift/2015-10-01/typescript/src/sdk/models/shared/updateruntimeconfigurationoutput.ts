import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";



// UpdateRuntimeConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateRuntimeConfigurationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;
}
