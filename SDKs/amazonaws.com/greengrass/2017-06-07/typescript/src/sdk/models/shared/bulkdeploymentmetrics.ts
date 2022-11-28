import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BulkDeploymentMetrics
/** 
 * Relevant metrics on input records processed during bulk deployment.
**/
export class BulkDeploymentMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvalidInputRecords" })
  invalidInputRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=RecordsProcessed" })
  recordsProcessed?: number;

  @SpeakeasyMetadata({ data: "json, name=RetryAttempts" })
  retryAttempts?: number;
}
