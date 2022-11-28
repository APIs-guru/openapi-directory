import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageStatusEnum } from "./imagestatusenum";



// ImageState
/** 
 *  Image state shows the image status and the reason for that status.
**/
export class ImageState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ImageStatusEnum;
}
