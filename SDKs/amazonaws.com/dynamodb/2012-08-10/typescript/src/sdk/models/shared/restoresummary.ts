import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RestoreSummary
/** 
 * Contains details for the restore.
**/
export class RestoreSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=RestoreDateTime" })
  restoreDateTime: Date;

  @Metadata({ data: "json, name=RestoreInProgress" })
  restoreInProgress: boolean;

  @Metadata({ data: "json, name=SourceBackupArn" })
  sourceBackupArn?: string;

  @Metadata({ data: "json, name=SourceTableArn" })
  sourceTableArn?: string;
}
