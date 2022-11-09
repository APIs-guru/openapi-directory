import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StorageVirtualMachineFilter } from "./storagevirtualmachinefilter";


export class DescribeStorageVirtualMachinesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.StorageVirtualMachineFilter })
  filters?: StorageVirtualMachineFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StorageVirtualMachineIds" })
  storageVirtualMachineIds?: string[];
}
