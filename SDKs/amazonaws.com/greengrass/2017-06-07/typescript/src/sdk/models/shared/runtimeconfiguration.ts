import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TelemetryConfiguration } from "./telemetryconfiguration";


// RuntimeConfiguration
/** 
 * Runtime configuration for a thing.
**/
export class RuntimeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=TelemetryConfiguration" })
  telemetryConfiguration?: TelemetryConfiguration;
}
