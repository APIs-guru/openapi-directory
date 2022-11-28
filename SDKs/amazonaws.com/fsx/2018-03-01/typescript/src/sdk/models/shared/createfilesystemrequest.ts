import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { CreateFileSystemLustreConfiguration } from "./createfilesystemlustreconfiguration";
import { CreateFileSystemOntapConfiguration } from "./createfilesystemontapconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { CreateFileSystemWindowsConfiguration } from "./createfilesystemwindowsconfiguration";



// CreateFileSystemRequest
/** 
 * The request object used to create a new Amazon FSx file system.
**/
export class CreateFileSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemType" })
  fileSystemType: FileSystemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: CreateFileSystemLustreConfiguration;

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: CreateFileSystemOntapConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StorageCapacity" })
  storageCapacity: number;

  @SpeakeasyMetadata({ data: "json, name=StorageType" })
  storageType?: StorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: CreateFileSystemWindowsConfiguration;
}
