import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
**/
export declare class EventBatchingCondition extends SpeakeasyBase {
    batchSize: number;
    batchWindow?: number;
}
