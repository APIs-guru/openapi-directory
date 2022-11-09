import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DestinationBackup
/** 
 * Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.
**/
export class DestinationBackup extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @Metadata({ data: "json, name=SourceBackup" })
  sourceBackup?: string;

  @Metadata({ data: "json, name=SourceCluster" })
  sourceCluster?: string;

  @Metadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;
}
