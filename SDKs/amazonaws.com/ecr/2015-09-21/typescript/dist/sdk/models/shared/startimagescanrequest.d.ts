import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class StartImageScanRequest extends SpeakeasyBase {
    imageId: ImageIdentifier;
    registryId?: string;
    repositoryName: string;
}
