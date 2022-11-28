import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryRecord } from "./historyrecord";



// DescribeSpotFleetRequestHistoryResponse
/** 
 * Contains the output of DescribeSpotFleetRequestHistory.
**/
export class DescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: HistoryRecord })
  historyRecords?: HistoryRecord[];

  @SpeakeasyMetadata()
  lastEvaluatedTime?: Date;

  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  spotFleetRequestId?: string;

  @SpeakeasyMetadata()
  startTime?: Date;
}
