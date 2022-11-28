import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateSvmActiveDirectoryConfiguration } from "./createsvmactivedirectoryconfiguration";
import { StorageVirtualMachineRootVolumeSecurityStyleEnum } from "./storagevirtualmachinerootvolumesecuritystyleenum";
import { Tag } from "./tag";



export class CreateStorageVirtualMachineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveDirectoryConfiguration" })
  activeDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RootVolumeSecurityStyle" })
  rootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=SvmAdminPassword" })
  svmAdminPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
