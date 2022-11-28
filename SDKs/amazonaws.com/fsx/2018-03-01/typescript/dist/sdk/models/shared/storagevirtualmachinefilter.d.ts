import { SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachineFilterNameEnum } from "./storagevirtualmachinefilternameenum";
/**
 * A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements.
**/
export declare class StorageVirtualMachineFilter extends SpeakeasyBase {
    name?: StorageVirtualMachineFilterNameEnum;
    values?: string[];
}
