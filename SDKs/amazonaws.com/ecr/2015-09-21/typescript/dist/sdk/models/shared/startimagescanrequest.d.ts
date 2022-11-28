import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class StartImageScanRequest extends SpeakeasyBase {
    imageId: ImageIdentifier;
    registryId?: string;
    repositoryName: string;
}
