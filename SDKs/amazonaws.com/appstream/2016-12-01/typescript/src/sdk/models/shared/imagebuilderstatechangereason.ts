import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageBuilderStateChangeReasonCodeEnum } from "./imagebuilderstatechangereasoncodeenum";



// ImageBuilderStateChangeReason
/** 
 * Describes the reason why the last image builder state change occurred.
**/
export class ImageBuilderStateChangeReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: ImageBuilderStateChangeReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
