import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageScanFindingsSummary
/** 
 * A summary of the last completed image scan.
**/
export class ImageScanFindingsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingSeverityCounts" })
  findingSeverityCounts?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=imageScanCompletedAt" })
  imageScanCompletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=vulnerabilitySourceUpdatedAt" })
  vulnerabilitySourceUpdatedAt?: Date;
}
