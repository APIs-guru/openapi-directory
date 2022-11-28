import { SpeakeasyBase } from "../../../internal/utils";
import { RecorderStatusEnum } from "./recorderstatusenum";
/**
 * The current status of the configuration recorder.
**/
export declare class ConfigurationRecorderStatus extends SpeakeasyBase {
    lastErrorCode?: string;
    lastErrorMessage?: string;
    lastStartTime?: Date;
    lastStatus?: RecorderStatusEnum;
    lastStatusChangeTime?: Date;
    lastStopTime?: Date;
    name?: string;
    recording?: boolean;
}
