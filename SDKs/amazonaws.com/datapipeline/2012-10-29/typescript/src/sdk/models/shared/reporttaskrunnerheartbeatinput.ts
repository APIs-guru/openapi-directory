import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportTaskRunnerHeartbeatInput
/** 
 * Contains the parameters for ReportTaskRunnerHeartbeat.
**/
export class ReportTaskRunnerHeartbeatInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=taskrunnerId" })
  taskrunnerId: string;

  @Metadata({ data: "json, name=workerGroup" })
  workerGroup?: string;
}
