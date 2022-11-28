import { SpeakeasyBase } from "../../../internal/utils";
import { ImageStatusEnum } from "./imagestatusenum";
/**
 *  Image state shows the image status and the reason for that status.
**/
export declare class ImageState extends SpeakeasyBase {
    reason?: string;
    status?: ImageStatusEnum;
}
