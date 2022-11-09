import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScanStatusEnum } from "./scanstatusenum";
/**
 * The current status of an image scan.
**/
export declare class ImageScanStatus extends SpeakeasyBase {
    description?: string;
    status?: ScanStatusEnum;
}
