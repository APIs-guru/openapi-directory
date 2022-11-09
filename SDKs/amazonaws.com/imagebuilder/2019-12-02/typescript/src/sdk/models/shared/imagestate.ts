import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageStatusEnum } from "./imagestatusenum";


// ImageState
/** 
 *  Image state shows the image status and the reason for that status.
**/
export class ImageState extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: ImageStatusEnum;
}
