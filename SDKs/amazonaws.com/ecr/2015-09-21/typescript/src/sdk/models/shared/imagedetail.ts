import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageScanFindingsSummary } from "./imagescanfindingssummary";
import { ImageScanStatus } from "./imagescanstatus";



// ImageDetail
/** 
 * An object that describes an image returned by a <a>DescribeImages</a> operation.
**/
export class ImageDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactMediaType" })
  artifactMediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=imagePushedAt" })
  imagePushedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=imageScanFindingsSummary" })
  imageScanFindingsSummary?: ImageScanFindingsSummary;

  @SpeakeasyMetadata({ data: "json, name=imageScanStatus" })
  imageScanStatus?: ImageScanStatus;

  @SpeakeasyMetadata({ data: "json, name=imageSizeInBytes" })
  imageSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=imageTags" })
  imageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
