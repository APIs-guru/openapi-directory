import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachineLifecycleEnum } from "./storagevirtualmachinelifecycleenum";



export class DeleteStorageVirtualMachineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: StorageVirtualMachineLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId?: string;
}
