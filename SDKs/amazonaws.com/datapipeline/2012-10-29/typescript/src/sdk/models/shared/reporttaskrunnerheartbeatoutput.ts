import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportTaskRunnerHeartbeatOutput
/** 
 * Contains the output of ReportTaskRunnerHeartbeat.
**/
export class ReportTaskRunnerHeartbeatOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=terminate" })
  terminate: boolean;
}
