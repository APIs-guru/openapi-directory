import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdministrativeAction } from "./administrativeaction";
import { FileSystemFailureDetails } from "./filesystemfailuredetails";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
import { LustreFileSystemConfiguration } from "./lustrefilesystemconfiguration";
import { OntapFileSystemConfiguration } from "./ontapfilesystemconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { WindowsFileSystemConfiguration } from "./windowsfilesystemconfiguration";


// FileSystem
/** 
 * A description of a specific Amazon FSx file system.
**/
export class FileSystem extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdministrativeActions", elemType: shared.AdministrativeAction })
  administrativeActions?: AdministrativeAction[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DNSName" })
  dnsName?: string;

  @Metadata({ data: "json, name=FailureDetails" })
  failureDetails?: FileSystemFailureDetails;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=FileSystemType" })
  fileSystemType?: FileSystemTypeEnum;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: FileSystemLifecycleEnum;

  @Metadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: LustreFileSystemConfiguration;

  @Metadata({ data: "json, name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @Metadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: OntapFileSystemConfiguration;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=StorageCapacity" })
  storageCapacity?: number;

  @Metadata({ data: "json, name=StorageType" })
  storageType?: StorageTypeEnum;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @Metadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: WindowsFileSystemConfiguration;
}
