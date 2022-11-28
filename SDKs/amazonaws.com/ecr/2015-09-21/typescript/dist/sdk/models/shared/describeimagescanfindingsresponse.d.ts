import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanFindings } from "./imagescanfindings";
import { ImageScanStatus } from "./imagescanstatus";
export declare class DescribeImageScanFindingsResponse extends SpeakeasyBase {
    imageId?: ImageIdentifier;
    imageScanFindings?: ImageScanFindings;
    imageScanStatus?: ImageScanStatus;
    nextToken?: string;
    registryId?: string;
    repositoryName?: string;
}
