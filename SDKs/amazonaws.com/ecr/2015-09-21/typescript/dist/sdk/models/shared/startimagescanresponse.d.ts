import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanStatus } from "./imagescanstatus";
export declare class StartImageScanResponse extends SpeakeasyBase {
    imageId?: ImageIdentifier;
    imageScanStatus?: ImageScanStatus;
    registryId?: string;
    repositoryName?: string;
}
