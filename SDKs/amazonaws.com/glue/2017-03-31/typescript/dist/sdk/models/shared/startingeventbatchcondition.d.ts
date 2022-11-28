import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The batch condition that started the workflow run. Either the number of events in the batch size arrived, in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow member is non-zero.
**/
export declare class StartingEventBatchCondition extends SpeakeasyBase {
    batchSize?: number;
    batchWindow?: number;
}
