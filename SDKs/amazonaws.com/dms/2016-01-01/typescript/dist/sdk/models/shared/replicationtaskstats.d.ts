import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.
**/
export declare class ReplicationTaskStats extends SpeakeasyBase {
    elapsedTimeMillis?: number;
    freshStartDate?: Date;
    fullLoadFinishDate?: Date;
    fullLoadProgressPercent?: number;
    fullLoadStartDate?: Date;
    startDate?: Date;
    stopDate?: Date;
    tablesErrored?: number;
    tablesLoaded?: number;
    tablesLoading?: number;
    tablesQueued?: number;
}
