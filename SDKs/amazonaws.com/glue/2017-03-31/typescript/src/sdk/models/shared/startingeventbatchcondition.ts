import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartingEventBatchCondition
/** 
 * The batch condition that started the workflow run. Either the number of events in the batch size arrived, in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow member is non-zero.
**/
export class StartingEventBatchCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=BatchWindow" })
  batchWindow?: number;
}
