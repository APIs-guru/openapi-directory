import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryRecordEntry } from "./historyrecordentry";
export declare class DescribeFleetHistoryResult extends SpeakeasyBase {
    fleetId?: string;
    historyRecords?: HistoryRecordEntry[];
    lastEvaluatedTime?: Date;
    nextToken?: string;
    startTime?: Date;
}
