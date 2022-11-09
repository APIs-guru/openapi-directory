import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecorderStatusEnum } from "./recorderstatusenum";


// ConfigurationRecorderStatus
/** 
 * The current status of the configuration recorder.
**/
export class ConfigurationRecorderStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastErrorCode" })
  lastErrorCode?: string;

  @Metadata({ data: "json, name=lastErrorMessage" })
  lastErrorMessage?: string;

  @Metadata({ data: "json, name=lastStartTime" })
  lastStartTime?: Date;

  @Metadata({ data: "json, name=lastStatus" })
  lastStatus?: RecorderStatusEnum;

  @Metadata({ data: "json, name=lastStatusChangeTime" })
  lastStatusChangeTime?: Date;

  @Metadata({ data: "json, name=lastStopTime" })
  lastStopTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recording" })
  recording?: boolean;
}
