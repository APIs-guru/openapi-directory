import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupTypeFilterEnum } from "./backuptypefilterenum";


export class ListBackupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupType" })
  backupType?: BackupTypeFilterEnum;

  @Metadata({ data: "json, name=ExclusiveStartBackupArn" })
  exclusiveStartBackupArn?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=TimeRangeLowerBound" })
  timeRangeLowerBound?: Date;

  @Metadata({ data: "json, name=TimeRangeUpperBound" })
  timeRangeUpperBound?: Date;
}
