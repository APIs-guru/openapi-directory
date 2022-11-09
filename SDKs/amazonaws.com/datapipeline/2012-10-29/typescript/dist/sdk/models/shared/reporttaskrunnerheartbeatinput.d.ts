import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains the parameters for ReportTaskRunnerHeartbeat.
**/
export declare class ReportTaskRunnerHeartbeatInput extends SpeakeasyBase {
    hostname?: string;
    taskrunnerId: string;
    workerGroup?: string;
}
