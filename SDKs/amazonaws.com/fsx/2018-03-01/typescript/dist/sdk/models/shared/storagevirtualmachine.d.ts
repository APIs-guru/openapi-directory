import { SpeakeasyBase } from "../../../internal/utils";
import { SvmActiveDirectoryConfiguration } from "./svmactivedirectoryconfiguration";
import { SvmEndpoints } from "./svmendpoints";
import { StorageVirtualMachineLifecycleEnum } from "./storagevirtualmachinelifecycleenum";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { StorageVirtualMachineRootVolumeSecurityStyleEnum } from "./storagevirtualmachinerootvolumesecuritystyleenum";
import { StorageVirtualMachineSubtypeEnum } from "./storagevirtualmachinesubtypeenum";
import { Tag } from "./tag";
/**
 * Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuraton.
**/
export declare class StorageVirtualMachine extends SpeakeasyBase {
    activeDirectoryConfiguration?: SvmActiveDirectoryConfiguration;
    creationTime?: Date;
    endpoints?: SvmEndpoints;
    fileSystemId?: string;
    lifecycle?: StorageVirtualMachineLifecycleEnum;
    lifecycleTransitionReason?: LifecycleTransitionReason;
    name?: string;
    resourceArn?: string;
    rootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyleEnum;
    storageVirtualMachineId?: string;
    subtype?: StorageVirtualMachineSubtypeEnum;
    tags?: Tag[];
    uuid?: string;
}
