import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeAction } from "./administrativeaction";
import { FileSystemFailureDetails } from "./filesystemfailuredetails";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
import { LustreFileSystemConfiguration } from "./lustrefilesystemconfiguration";
import { OntapFileSystemConfiguration } from "./ontapfilesystemconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { WindowsFileSystemConfiguration } from "./windowsfilesystemconfiguration";
/**
 * A description of a specific Amazon FSx file system.
**/
export declare class FileSystem extends SpeakeasyBase {
    administrativeActions?: AdministrativeAction[];
    creationTime?: Date;
    dnsName?: string;
    failureDetails?: FileSystemFailureDetails;
    fileSystemId?: string;
    fileSystemType?: FileSystemTypeEnum;
    kmsKeyId?: string;
    lifecycle?: FileSystemLifecycleEnum;
    lustreConfiguration?: LustreFileSystemConfiguration;
    networkInterfaceIds?: string[];
    ontapConfiguration?: OntapFileSystemConfiguration;
    ownerId?: string;
    resourceArn?: string;
    storageCapacity?: number;
    storageType?: StorageTypeEnum;
    subnetIds?: string[];
    tags?: Tag[];
    vpcId?: string;
    windowsConfiguration?: WindowsFileSystemConfiguration;
}
