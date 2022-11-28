import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedSourceStatusTypeEnum } from "./aggregatedsourcestatustypeenum";
import { AggregatedSourceTypeEnum } from "./aggregatedsourcetypeenum";
/**
 * The current sync status between the source and the aggregator account.
**/
export declare class AggregatedSourceStatus extends SpeakeasyBase {
    awsRegion?: string;
    lastErrorCode?: string;
    lastErrorMessage?: string;
    lastUpdateStatus?: AggregatedSourceStatusTypeEnum;
    lastUpdateTime?: Date;
    sourceId?: string;
    sourceType?: AggregatedSourceTypeEnum;
}
