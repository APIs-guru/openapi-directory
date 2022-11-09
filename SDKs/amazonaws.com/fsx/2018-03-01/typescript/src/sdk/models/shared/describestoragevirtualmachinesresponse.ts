import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StorageVirtualMachine } from "./storagevirtualmachine";


export class DescribeStorageVirtualMachinesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StorageVirtualMachines", elemType: shared.StorageVirtualMachine })
  storageVirtualMachines?: StorageVirtualMachine[];
}
