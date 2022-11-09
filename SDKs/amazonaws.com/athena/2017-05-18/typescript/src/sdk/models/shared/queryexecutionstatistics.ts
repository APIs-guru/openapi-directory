import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryExecutionStatistics
/** 
 * The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.
**/
export class QueryExecutionStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataManifestLocation" })
  dataManifestLocation?: string;

  @Metadata({ data: "json, name=DataScannedInBytes" })
  dataScannedInBytes?: number;

  @Metadata({ data: "json, name=EngineExecutionTimeInMillis" })
  engineExecutionTimeInMillis?: number;

  @Metadata({ data: "json, name=QueryPlanningTimeInMillis" })
  queryPlanningTimeInMillis?: number;

  @Metadata({ data: "json, name=QueryQueueTimeInMillis" })
  queryQueueTimeInMillis?: number;

  @Metadata({ data: "json, name=ServiceProcessingTimeInMillis" })
  serviceProcessingTimeInMillis?: number;

  @Metadata({ data: "json, name=TotalExecutionTimeInMillis" })
  totalExecutionTimeInMillis?: number;
}
