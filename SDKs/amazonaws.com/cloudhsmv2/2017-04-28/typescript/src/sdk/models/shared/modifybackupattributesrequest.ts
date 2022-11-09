import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyBackupAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;

  @Metadata({ data: "json, name=NeverExpires" })
  neverExpires: boolean;
}
