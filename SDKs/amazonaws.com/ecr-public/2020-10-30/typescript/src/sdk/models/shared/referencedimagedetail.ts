import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReferencedImageDetail
/** 
 * An object that describes the image tag details returned by a <a>DescribeImageTags</a> action.
**/
export class ReferencedImageDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactMediaType" })
  artifactMediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=imagePushedAt" })
  imagePushedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=imageSizeInBytes" })
  imageSizeInBytes?: number;
}
