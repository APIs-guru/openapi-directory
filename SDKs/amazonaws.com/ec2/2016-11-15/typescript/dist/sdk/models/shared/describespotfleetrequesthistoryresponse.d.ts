import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryRecord } from "./historyrecord";
/**
 * Contains the output of DescribeSpotFleetRequestHistory.
**/
export declare class DescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
    historyRecords?: HistoryRecord[];
    lastEvaluatedTime?: Date;
    nextToken?: string;
    spotFleetRequestId?: string;
    startTime?: Date;
}
