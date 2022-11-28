import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScanStatusEnum } from "./scanstatusenum";



// ImageScanStatus
/** 
 * The current status of an image scan.
**/
export class ImageScanStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ScanStatusEnum;
}
