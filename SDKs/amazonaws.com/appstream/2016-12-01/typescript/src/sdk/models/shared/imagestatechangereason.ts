import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageStateChangeReasonCodeEnum } from "./imagestatechangereasoncodeenum";


// ImageStateChangeReason
/** 
 * Describes the reason why the last image state change occurred.
**/
export class ImageStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: ImageStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
