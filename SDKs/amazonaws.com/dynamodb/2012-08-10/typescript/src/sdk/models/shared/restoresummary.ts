import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreSummary
/** 
 * Contains details for the restore.
**/
export class RestoreSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RestoreDateTime" })
  restoreDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=RestoreInProgress" })
  restoreInProgress: boolean;

  @SpeakeasyMetadata({ data: "json, name=SourceBackupArn" })
  sourceBackupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceTableArn" })
  sourceTableArn?: string;
}
