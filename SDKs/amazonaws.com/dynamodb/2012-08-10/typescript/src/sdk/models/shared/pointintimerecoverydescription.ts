import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PointInTimeRecoveryStatusEnum } from "./pointintimerecoverystatusenum";


// PointInTimeRecoveryDescription
/** 
 * The description of the point in time settings applied to the table.
**/
export class PointInTimeRecoveryDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=EarliestRestorableDateTime" })
  earliestRestorableDateTime?: Date;

  @Metadata({ data: "json, name=LatestRestorableDateTime" })
  latestRestorableDateTime?: Date;

  @Metadata({ data: "json, name=PointInTimeRecoveryStatus" })
  pointInTimeRecoveryStatus?: PointInTimeRecoveryStatusEnum;
}
