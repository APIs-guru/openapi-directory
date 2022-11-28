import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackageStatus } from "./updatesystemmodelspackagestatus";
export declare class UpdateSystemModelsPackageStatusSummary extends SpeakeasyBase {
    averageDownloadTime?: string;
    averageInstallTime?: string;
    downloaded?: number;
    error?: number;
    installed?: number;
    package?: string;
    packageId?: string;
    packageStatusItems?: UpdateSystemModelsPackageStatus[];
}
