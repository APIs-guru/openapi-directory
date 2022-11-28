import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportTaskRunnerHeartbeatInput
/** 
 * Contains the parameters for ReportTaskRunnerHeartbeat.
**/
export class ReportTaskRunnerHeartbeatInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=taskrunnerId" })
  taskrunnerId: string;

  @SpeakeasyMetadata({ data: "json, name=workerGroup" })
  workerGroup?: string;
}
