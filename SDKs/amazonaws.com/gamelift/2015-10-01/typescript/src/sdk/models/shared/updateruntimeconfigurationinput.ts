import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";


// UpdateRuntimeConfigurationInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateRuntimeConfigurationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration: RuntimeConfiguration;
}
