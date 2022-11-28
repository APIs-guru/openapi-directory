import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachineFilterNameEnum } from "./storagevirtualmachinefilternameenum";



// StorageVirtualMachineFilter
/** 
 * A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements.
**/
export class StorageVirtualMachineFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: StorageVirtualMachineFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
