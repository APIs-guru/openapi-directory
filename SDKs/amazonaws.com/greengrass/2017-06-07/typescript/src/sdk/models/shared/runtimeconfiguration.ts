import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TelemetryConfiguration } from "./telemetryconfiguration";



// RuntimeConfiguration
/** 
 * Runtime configuration for a thing.
**/
export class RuntimeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TelemetryConfiguration" })
  telemetryConfiguration?: TelemetryConfiguration;
}
