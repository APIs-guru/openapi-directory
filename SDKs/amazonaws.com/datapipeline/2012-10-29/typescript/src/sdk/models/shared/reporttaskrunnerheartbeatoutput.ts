import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportTaskRunnerHeartbeatOutput
/** 
 * Contains the output of ReportTaskRunnerHeartbeat.
**/
export class ReportTaskRunnerHeartbeatOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=terminate" })
  terminate: boolean;
}
