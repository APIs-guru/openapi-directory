import { SpeakeasyBase } from "../../../internal/utils";
import { CreateSvmActiveDirectoryConfiguration } from "./createsvmactivedirectoryconfiguration";
import { StorageVirtualMachineRootVolumeSecurityStyleEnum } from "./storagevirtualmachinerootvolumesecuritystyleenum";
import { Tag } from "./tag";
export declare class CreateStorageVirtualMachineRequest extends SpeakeasyBase {
    activeDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;
    clientRequestToken?: string;
    fileSystemId: string;
    name: string;
    rootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyleEnum;
    svmAdminPassword?: string;
    tags?: Tag[];
}
