import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageVirtualMachine } from "./storagevirtualmachine";


export class CreateStorageVirtualMachineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=StorageVirtualMachine" })
  storageVirtualMachine?: StorageVirtualMachine;
}
