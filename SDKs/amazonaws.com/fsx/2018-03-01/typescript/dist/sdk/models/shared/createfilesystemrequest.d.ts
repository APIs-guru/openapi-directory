import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { CreateFileSystemLustreConfiguration } from "./createfilesystemlustreconfiguration";
import { CreateFileSystemOntapConfiguration } from "./createfilesystemontapconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { CreateFileSystemWindowsConfiguration } from "./createfilesystemwindowsconfiguration";
/**
 * The request object used to create a new Amazon FSx file system.
**/
export declare class CreateFileSystemRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemType: FileSystemTypeEnum;
    kmsKeyId?: string;
    lustreConfiguration?: CreateFileSystemLustreConfiguration;
    ontapConfiguration?: CreateFileSystemOntapConfiguration;
    securityGroupIds?: string[];
    storageCapacity: number;
    storageType?: StorageTypeEnum;
    subnetIds: string[];
    tags?: Tag[];
    windowsConfiguration?: CreateFileSystemWindowsConfiguration;
}
