import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageScanFindingsSummary
/** 
 * A summary of the last completed image scan.
**/
export class ImageScanFindingsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingSeverityCounts" })
  findingSeverityCounts?: Map<string, number>;

  @Metadata({ data: "json, name=imageScanCompletedAt" })
  imageScanCompletedAt?: Date;

  @Metadata({ data: "json, name=vulnerabilitySourceUpdatedAt" })
  vulnerabilitySourceUpdatedAt?: Date;
}
