import { SpeakeasyBase } from "../../../internal/utils";
import { ImageScanFinding } from "./imagescanfinding";
/**
 * The details of an image scan.
**/
export declare class ImageScanFindings extends SpeakeasyBase {
    findingSeverityCounts?: Map<string, number>;
    findings?: ImageScanFinding[];
    imageScanCompletedAt?: Date;
    vulnerabilitySourceUpdatedAt?: Date;
}
