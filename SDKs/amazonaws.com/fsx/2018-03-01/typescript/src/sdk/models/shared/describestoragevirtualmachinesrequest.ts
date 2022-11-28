import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachineFilter } from "./storagevirtualmachinefilter";



export class DescribeStorageVirtualMachinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: StorageVirtualMachineFilter })
  filters?: StorageVirtualMachineFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineIds" })
  storageVirtualMachineIds?: string[];
}
