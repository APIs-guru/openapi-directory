import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateSvmActiveDirectoryConfiguration } from "./createsvmactivedirectoryconfiguration";
import { StorageVirtualMachineRootVolumeSecurityStyleEnum } from "./storagevirtualmachinerootvolumesecuritystyleenum";
import { Tag } from "./tag";


export class CreateStorageVirtualMachineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveDirectoryConfiguration" })
  activeDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RootVolumeSecurityStyle" })
  rootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyleEnum;

  @Metadata({ data: "json, name=SvmAdminPassword" })
  svmAdminPassword?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
