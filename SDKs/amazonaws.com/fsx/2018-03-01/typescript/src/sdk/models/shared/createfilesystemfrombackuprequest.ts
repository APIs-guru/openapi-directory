import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateFileSystemLustreConfiguration } from "./createfilesystemlustreconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { CreateFileSystemWindowsConfiguration } from "./createfilesystemwindowsconfiguration";


// CreateFileSystemFromBackupRequest
/** 
 * The request object for the <code>CreateFileSystemFromBackup</code> operation.
**/
export class CreateFileSystemFromBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: CreateFileSystemLustreConfiguration;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=StorageType" })
  storageType?: StorageTypeEnum;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: CreateFileSystemWindowsConfiguration;
}
