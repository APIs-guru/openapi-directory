import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationTaskStats
/** 
 * In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.
**/
export class ReplicationTaskStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElapsedTimeMillis" })
  elapsedTimeMillis?: number;

  @Metadata({ data: "json, name=FreshStartDate" })
  freshStartDate?: Date;

  @Metadata({ data: "json, name=FullLoadFinishDate" })
  fullLoadFinishDate?: Date;

  @Metadata({ data: "json, name=FullLoadProgressPercent" })
  fullLoadProgressPercent?: number;

  @Metadata({ data: "json, name=FullLoadStartDate" })
  fullLoadStartDate?: Date;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=StopDate" })
  stopDate?: Date;

  @Metadata({ data: "json, name=TablesErrored" })
  tablesErrored?: number;

  @Metadata({ data: "json, name=TablesLoaded" })
  tablesLoaded?: number;

  @Metadata({ data: "json, name=TablesLoading" })
  tablesLoading?: number;

  @Metadata({ data: "json, name=TablesQueued" })
  tablesQueued?: number;
}
