import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventBatchingCondition
/** 
 * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
**/
export class EventBatchingCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchSize" })
  batchSize: number;

  @Metadata({ data: "json, name=BatchWindow" })
  batchWindow?: number;
}
