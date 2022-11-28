import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageStateChangeReasonCodeEnum } from "./imagestatechangereasoncodeenum";



// ImageStateChangeReason
/** 
 * Describes the reason why the last image state change occurred.
**/
export class ImageStateChangeReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: ImageStateChangeReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
