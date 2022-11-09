import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageScanFindingsSummary } from "./imagescanfindingssummary";
import { ImageScanStatus } from "./imagescanstatus";


// ImageDetail
/** 
 * An object that describes an image returned by a <a>DescribeImages</a> operation.
**/
export class ImageDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactMediaType" })
  artifactMediaType?: string;

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=imageManifestMediaType" })
  imageManifestMediaType?: string;

  @Metadata({ data: "json, name=imagePushedAt" })
  imagePushedAt?: Date;

  @Metadata({ data: "json, name=imageScanFindingsSummary" })
  imageScanFindingsSummary?: ImageScanFindingsSummary;

  @Metadata({ data: "json, name=imageScanStatus" })
  imageScanStatus?: ImageScanStatus;

  @Metadata({ data: "json, name=imageSizeInBytes" })
  imageSizeInBytes?: number;

  @Metadata({ data: "json, name=imageTags" })
  imageTags?: string[];

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
