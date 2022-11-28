import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinationBackup
/** 
 * Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.
**/
export class DestinationBackup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=SourceBackup" })
  sourceBackup?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceCluster" })
  sourceCluster?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;
}
