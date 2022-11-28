import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachine } from "./storagevirtualmachine";



export class CreateStorageVirtualMachineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachine" })
  storageVirtualMachine?: StorageVirtualMachine;
}
