import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContinuousBackupsStatusEnum } from "./continuousbackupsstatusenum";
import { PointInTimeRecoveryDescription } from "./pointintimerecoverydescription";


// ContinuousBackupsDescription
/** 
 * Represents the continuous backups and point in time recovery settings on the table.
**/
export class ContinuousBackupsDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContinuousBackupsStatus" })
  continuousBackupsStatus: ContinuousBackupsStatusEnum;

  @Metadata({ data: "json, name=PointInTimeRecoveryDescription" })
  pointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
}
