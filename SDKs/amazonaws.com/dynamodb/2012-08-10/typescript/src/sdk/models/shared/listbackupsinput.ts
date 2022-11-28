import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupTypeFilterEnum } from "./backuptypefilterenum";



export class ListBackupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupType" })
  backupType?: BackupTypeFilterEnum;

  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartBackupArn" })
  exclusiveStartBackupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeRangeLowerBound" })
  timeRangeLowerBound?: Date;

  @SpeakeasyMetadata({ data: "json, name=TimeRangeUpperBound" })
  timeRangeUpperBound?: Date;
}
