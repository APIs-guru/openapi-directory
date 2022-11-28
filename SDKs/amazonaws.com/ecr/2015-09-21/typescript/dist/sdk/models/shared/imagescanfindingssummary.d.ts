import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the last completed image scan.
**/
export declare class ImageScanFindingsSummary extends SpeakeasyBase {
    findingSeverityCounts?: Map<string, number>;
    imageScanCompletedAt?: Date;
    vulnerabilitySourceUpdatedAt?: Date;
}
