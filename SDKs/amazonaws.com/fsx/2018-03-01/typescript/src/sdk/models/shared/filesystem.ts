import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AdministrativeActions", elemType: AdministrativeAction })
  administrativeActions?: AdministrativeAction[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DNSName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureDetails" })
  failureDetails?: FileSystemFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemType" })
  fileSystemType?: FileSystemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: FileSystemLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: LustreFileSystemConfiguration;

  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: OntapFileSystemConfiguration;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageCapacity" })
  storageCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageType" })
  storageType?: StorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: WindowsFileSystemConfiguration;
}
