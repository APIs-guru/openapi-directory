import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanStatus } from "./imagescanstatus";
export declare class StartImageScanResponse extends SpeakeasyBase {
    imageId?: ImageIdentifier;
    imageScanStatus?: ImageScanStatus;
    registryId?: string;
    repositoryName?: string;
}
