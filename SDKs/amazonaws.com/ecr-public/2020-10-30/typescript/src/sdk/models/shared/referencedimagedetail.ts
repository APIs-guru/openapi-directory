import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReferencedImageDetail
/** 
 * An object that describes the image tag details returned by a <a>DescribeImageTags</a> action.
**/
export class ReferencedImageDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactMediaType" })
  artifactMediaType?: string;

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @Metadata({ data: "json, name=imagePushedAt" })
  imagePushedAt?: Date;

  @Metadata({ data: "json, name=imageSizeInBytes" })
  imageSizeInBytes?: number;
}
