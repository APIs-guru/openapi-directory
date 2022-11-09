import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateSvmActiveDirectoryConfiguration } from "./updatesvmactivedirectoryconfiguration";


export class UpdateStorageVirtualMachineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveDirectoryConfiguration" })
  activeDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId: string;

  @Metadata({ data: "json, name=SvmAdminPassword" })
  svmAdminPassword?: string;
}
