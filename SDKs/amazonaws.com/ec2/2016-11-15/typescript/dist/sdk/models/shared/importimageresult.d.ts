import { SpeakeasyBase } from "../../../internal/utils";
import { ImportImageLicenseConfigurationResponse } from "./importimagelicenseconfigurationresponse";
import { SnapshotDetail } from "./snapshotdetail";
import { Tag } from "./tag";
export declare class ImportImageResult extends SpeakeasyBase {
    architecture?: string;
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
