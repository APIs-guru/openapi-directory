import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryExecutionStatistics
/** 
 * The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.
**/
export class QueryExecutionStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataManifestLocation" })
  dataManifestLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=DataScannedInBytes" })
  dataScannedInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=EngineExecutionTimeInMillis" })
  engineExecutionTimeInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=QueryPlanningTimeInMillis" })
  queryPlanningTimeInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=QueryQueueTimeInMillis" })
  queryQueueTimeInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceProcessingTimeInMillis" })
  serviceProcessingTimeInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalExecutionTimeInMillis" })
  totalExecutionTimeInMillis?: number;
}
