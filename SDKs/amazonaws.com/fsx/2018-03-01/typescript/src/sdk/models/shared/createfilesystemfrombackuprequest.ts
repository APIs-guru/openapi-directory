import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateFileSystemLustreConfiguration } from "./createfilesystemlustreconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { CreateFileSystemWindowsConfiguration } from "./createfilesystemwindowsconfiguration";



// CreateFileSystemFromBackupRequest
/** 
 * The request object for the <code>CreateFileSystemFromBackup</code> operation.
**/
export class CreateFileSystemFromBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LustreConfiguration" })
  lustreConfiguration?: CreateFileSystemLustreConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StorageType" })
  storageType?: StorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=WindowsConfiguration" })
  windowsConfiguration?: CreateFileSystemWindowsConfiguration;
}
