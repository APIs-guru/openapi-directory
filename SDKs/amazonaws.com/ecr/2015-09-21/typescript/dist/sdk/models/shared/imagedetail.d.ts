import { SpeakeasyBase } from "../../../internal/utils";
import { ImageScanFindingsSummary } from "./imagescanfindingssummary";
import { ImageScanStatus } from "./imagescanstatus";
/**
 * An object that describes an image returned by a <a>DescribeImages</a> operation.
**/
export declare class ImageDetail extends SpeakeasyBase {
    artifactMediaType?: string;
    imageDigest?: string;
    imageManifestMediaType?: string;
    imagePushedAt?: Date;
    imageScanFindingsSummary?: ImageScanFindingsSummary;
    imageScanStatus?: ImageScanStatus;
    imageSizeInBytes?: number;
    imageTags?: string[];
    registryId?: string;
    repositoryName?: string;
}
