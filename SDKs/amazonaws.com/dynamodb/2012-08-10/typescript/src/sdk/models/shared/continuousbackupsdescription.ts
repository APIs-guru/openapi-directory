import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContinuousBackupsStatusEnum } from "./continuousbackupsstatusenum";
import { PointInTimeRecoveryDescription } from "./pointintimerecoverydescription";



// ContinuousBackupsDescription
/** 
 * Represents the continuous backups and point in time recovery settings on the table.
**/
export class ContinuousBackupsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContinuousBackupsStatus" })
  continuousBackupsStatus: ContinuousBackupsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PointInTimeRecoveryDescription" })
  pointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
}
