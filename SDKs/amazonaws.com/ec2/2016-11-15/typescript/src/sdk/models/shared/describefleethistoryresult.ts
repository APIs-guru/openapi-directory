import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryRecordEntry } from "./historyrecordentry";



export class DescribeFleetHistoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fleetId?: string;

  @SpeakeasyMetadata({ elemType: HistoryRecordEntry })
  historyRecords?: HistoryRecordEntry[];

  @SpeakeasyMetadata()
  lastEvaluatedTime?: Date;

  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  startTime?: Date;
}
