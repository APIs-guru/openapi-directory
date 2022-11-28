import { SpeakeasyBase } from "../../../internal/utils";
import { BootModeValuesEnum } from "./bootmodevaluesenum";
import { ImportImageLicenseConfigurationResponse } from "./importimagelicenseconfigurationresponse";
import { SnapshotDetail } from "./snapshotdetail";
import { Tag } from "./tag";
/**
 * Describes an import image task.
**/
export declare class ImportImageTask extends SpeakeasyBase {
    architecture?: string;
    bootMode?: BootModeValuesEnum;
    description?: string;
    encrypted?: boolean;
    hypervisor?: string;
    imageId?: string;
    importTaskId?: string;
    kmsKeyId?: string;
    licenseSpecifications?: ImportImageLicenseConfigurationResponse[];
    licenseType?: string;
    platform?: string;
    progress?: string;
    snapshotDetails?: SnapshotDetail[];
    status?: string;
    statusMessage?: string;
    tags?: Tag[];
    usageOperation?: string;
}
