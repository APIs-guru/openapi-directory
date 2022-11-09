import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageVirtualMachineLifecycleEnum } from "./storagevirtualmachinelifecycleenum";


export class DeleteStorageVirtualMachineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: StorageVirtualMachineLifecycleEnum;

  @Metadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId?: string;
}
