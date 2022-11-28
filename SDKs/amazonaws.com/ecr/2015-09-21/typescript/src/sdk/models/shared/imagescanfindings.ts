import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageScanFinding } from "./imagescanfinding";



// ImageScanFindings
/** 
 * The details of an image scan.
**/
export class ImageScanFindings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingSeverityCounts" })
  findingSeverityCounts?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=findings", elemType: ImageScanFinding })
  findings?: ImageScanFinding[];

  @SpeakeasyMetadata({ data: "json, name=imageScanCompletedAt" })
  imageScanCompletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=vulnerabilitySourceUpdatedAt" })
  vulnerabilitySourceUpdatedAt?: Date;
}
