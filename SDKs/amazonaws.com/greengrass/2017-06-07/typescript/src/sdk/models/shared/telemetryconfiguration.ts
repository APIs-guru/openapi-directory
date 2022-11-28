import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSyncStatusEnum } from "./configurationsyncstatusenum";
import { TelemetryEnum } from "./telemetryenum";



// TelemetryConfiguration
/** 
 * Configuration settings for running telemetry.
**/
export class TelemetryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSyncStatus" })
  configurationSyncStatus?: ConfigurationSyncStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Telemetry" })
  telemetry: TelemetryEnum;
}
