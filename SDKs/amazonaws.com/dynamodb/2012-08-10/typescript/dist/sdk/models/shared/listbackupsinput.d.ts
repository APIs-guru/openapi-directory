import { SpeakeasyBase } from "../../../internal/utils";
import { BackupTypeFilterEnum } from "./backuptypefilterenum";
export declare class ListBackupsInput extends SpeakeasyBase {
    backupType?: BackupTypeFilterEnum;
    exclusiveStartBackupArn?: string;
    limit?: number;
    tableName?: string;
    timeRangeLowerBound?: Date;
    timeRangeUpperBound?: Date;
}
