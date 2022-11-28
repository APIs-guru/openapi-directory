import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventBatchingCondition
/** 
 * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
**/
export class EventBatchingCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchSize" })
  batchSize: number;

  @SpeakeasyMetadata({ data: "json, name=BatchWindow" })
  batchWindow?: number;
}
