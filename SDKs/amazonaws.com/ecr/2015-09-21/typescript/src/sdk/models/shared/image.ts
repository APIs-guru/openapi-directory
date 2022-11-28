import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";



// Image
/** 
 * An object representing an Amazon ECR image.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: ImageIdentifier;

  @SpeakeasyMetadata({ data: "json, name=imageManifest" })
  imageManifest?: string;

  @SpeakeasyMetadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
