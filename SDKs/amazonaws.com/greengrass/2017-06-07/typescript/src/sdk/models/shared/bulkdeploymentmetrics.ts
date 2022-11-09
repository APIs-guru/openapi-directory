import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BulkDeploymentMetrics
/** 
 * Relevant metrics on input records processed during bulk deployment.
**/
export class BulkDeploymentMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvalidInputRecords" })
  invalidInputRecords?: number;

  @Metadata({ data: "json, name=RecordsProcessed" })
  recordsProcessed?: number;

  @Metadata({ data: "json, name=RetryAttempts" })
  retryAttempts?: number;
}
