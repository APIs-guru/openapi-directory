import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationTaskStats
/** 
 * In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.
**/
export class ReplicationTaskStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElapsedTimeMillis" })
  elapsedTimeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=FreshStartDate" })
  freshStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FullLoadFinishDate" })
  fullLoadFinishDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FullLoadProgressPercent" })
  fullLoadProgressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=FullLoadStartDate" })
  fullLoadStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=StopDate" })
  stopDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TablesErrored" })
  tablesErrored?: number;

  @SpeakeasyMetadata({ data: "json, name=TablesLoaded" })
  tablesLoaded?: number;

  @SpeakeasyMetadata({ data: "json, name=TablesLoading" })
  tablesLoading?: number;

  @SpeakeasyMetadata({ data: "json, name=TablesQueued" })
  tablesQueued?: number;
}
