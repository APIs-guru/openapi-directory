import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyBackupAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=NeverExpires" })
  neverExpires: boolean;
}
