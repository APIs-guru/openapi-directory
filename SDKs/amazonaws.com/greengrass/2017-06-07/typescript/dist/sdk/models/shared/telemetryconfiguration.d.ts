import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationSyncStatusEnum } from "./configurationsyncstatusenum";
import { TelemetryEnum } from "./telemetryenum";
/**
 * Configuration settings for running telemetry.
**/
export declare class TelemetryConfiguration extends SpeakeasyBase {
    configurationSyncStatus?: ConfigurationSyncStatusEnum;
    telemetry: TelemetryEnum;
}
