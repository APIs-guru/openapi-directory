import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
/**
 * An object representing an Amazon ECR image.
**/
export declare class Image extends SpeakeasyBase {
    imageId?: ImageIdentifier;
    imageManifest?: string;
    imageManifestMediaType?: string;
    registryId?: string;
    repositoryName?: string;
}
