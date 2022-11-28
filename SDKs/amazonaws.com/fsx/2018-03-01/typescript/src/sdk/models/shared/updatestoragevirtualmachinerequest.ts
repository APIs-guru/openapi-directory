import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSvmActiveDirectoryConfiguration } from "./updatesvmactivedirectoryconfiguration";



export class UpdateStorageVirtualMachineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveDirectoryConfiguration" })
  activeDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId: string;

  @SpeakeasyMetadata({ data: "json, name=SvmAdminPassword" })
  svmAdminPassword?: string;
}
