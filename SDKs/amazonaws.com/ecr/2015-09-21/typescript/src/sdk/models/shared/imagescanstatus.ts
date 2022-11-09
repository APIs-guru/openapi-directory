import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScanStatusEnum } from "./scanstatusenum";


// ImageScanStatus
/** 
 * The current status of an image scan.
**/
export class ImageScanStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=status" })
  status?: ScanStatusEnum;
}
