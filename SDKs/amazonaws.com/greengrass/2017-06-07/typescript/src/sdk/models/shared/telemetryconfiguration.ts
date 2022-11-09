import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationSyncStatusEnum } from "./configurationsyncstatusenum";
import { TelemetryEnum } from "./telemetryenum";


// TelemetryConfiguration
/** 
 * Configuration settings for running telemetry.
**/
export class TelemetryConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSyncStatus" })
  configurationSyncStatus?: ConfigurationSyncStatusEnum;

  @Metadata({ data: "json, name=Telemetry" })
  telemetry: TelemetryEnum;
}
