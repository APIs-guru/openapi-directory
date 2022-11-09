import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationInstanceTaskLog } from "./replicationinstancetasklog";
export declare class DescribeReplicationInstanceTaskLogsResponse extends SpeakeasyBase {
    marker?: string;
    replicationInstanceArn?: string;
    replicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];
}
