import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FileSystemType" })
  fileSystemType: FileSystemTypeEnum;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: CreateFileSystemLustreConfiguration;

  @Metadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: CreateFileSystemOntapConfiguration;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=StorageCapacity" })
  storageCapacity: number;

  @Metadata({ data: "json, name=StorageType" })
  storageType?: StorageTypeEnum;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: CreateFileSystemWindowsConfiguration;
}
