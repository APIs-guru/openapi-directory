import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeBackupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupArn" })
  backupArn: string;
}
