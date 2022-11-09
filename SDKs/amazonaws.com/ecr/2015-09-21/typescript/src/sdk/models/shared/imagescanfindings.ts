import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageScanFinding } from "./imagescanfinding";


// ImageScanFindings
/** 
 * The details of an image scan.
**/
export class ImageScanFindings extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingSeverityCounts" })
  findingSeverityCounts?: Map<string, number>;

  @Metadata({ data: "json, name=findings", elemType: shared.ImageScanFinding })
  findings?: ImageScanFinding[];

  @Metadata({ data: "json, name=imageScanCompletedAt" })
  imageScanCompletedAt?: Date;

  @Metadata({ data: "json, name=vulnerabilitySourceUpdatedAt" })
  vulnerabilitySourceUpdatedAt?: Date;
}
