import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSvmActiveDirectoryConfiguration } from "./updatesvmactivedirectoryconfiguration";
export declare class UpdateStorageVirtualMachineRequest extends SpeakeasyBase {
    activeDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;
    clientRequestToken?: string;
    storageVirtualMachineId: string;
    svmAdminPassword?: string;
}
