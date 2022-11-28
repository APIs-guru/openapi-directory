import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PointInTimeRecoveryStatusEnum } from "./pointintimerecoverystatusenum";



// PointInTimeRecoveryDescription
/** 
 * The description of the point in time settings applied to the table.
**/
export class PointInTimeRecoveryDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EarliestRestorableDateTime" })
  earliestRestorableDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestRestorableDateTime" })
  latestRestorableDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PointInTimeRecoveryStatus" })
  pointInTimeRecoveryStatus?: PointInTimeRecoveryStatusEnum;
}
