import { SpeakeasyBase } from "../../../internal/utils";
import { CreateFileSystemLustreConfiguration } from "./createfilesystemlustreconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { CreateFileSystemWindowsConfiguration } from "./createfilesystemwindowsconfiguration";
/**
 * The request object for the <code>CreateFileSystemFromBackup</code> operation.
**/
export declare class CreateFileSystemFromBackupRequest extends SpeakeasyBase {
    backupId: string;
    clientRequestToken?: string;
    kmsKeyId?: string;
    lustreConfiguration?: CreateFileSystemLustreConfiguration;
    securityGroupIds?: string[];
    storageType?: StorageTypeEnum;
    subnetIds: string[];
    tags?: Tag[];
    windowsConfiguration?: CreateFileSystemWindowsConfiguration;
}
