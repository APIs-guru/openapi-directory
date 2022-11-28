import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachine } from "./storagevirtualmachine";



export class DescribeStorageVirtualMachinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachines", elemType: StorageVirtualMachine })
  storageVirtualMachines?: StorageVirtualMachine[];
}
