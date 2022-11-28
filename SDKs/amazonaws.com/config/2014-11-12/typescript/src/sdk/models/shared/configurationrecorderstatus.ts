import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecorderStatusEnum } from "./recorderstatusenum";



// ConfigurationRecorderStatus
/** 
 * The current status of the configuration recorder.
**/
export class ConfigurationRecorderStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastErrorCode" })
  lastErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastErrorMessage" })
  lastErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStartTime" })
  lastStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastStatus" })
  lastStatus?: RecorderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastStatusChangeTime" })
  lastStatusChangeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastStopTime" })
  lastStopTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: boolean;
}
