import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";


// Image
/** 
 * An object representing an Amazon ECR image.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageId" })
  imageId?: ImageIdentifier;

  @Metadata({ data: "json, name=imageManifest" })
  imageManifest?: string;

  @Metadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
