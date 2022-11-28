import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * <p/>
**/
export declare class DescribeTableStatisticsMessage extends SpeakeasyBase {
    filters?: Filter[];
    marker?: string;
    maxRecords?: number;
    replicationTaskArn: string;
}
