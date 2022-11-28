import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";



// UpdateRuntimeConfigurationInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateRuntimeConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration: RuntimeConfiguration;
}
