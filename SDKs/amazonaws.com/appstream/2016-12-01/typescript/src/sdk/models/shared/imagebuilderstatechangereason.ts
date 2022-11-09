import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageBuilderStateChangeReasonCodeEnum } from "./imagebuilderstatechangereasoncodeenum";


// ImageBuilderStateChangeReason
/** 
 * Describes the reason why the last image builder state change occurred.
**/
export class ImageBuilderStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: ImageBuilderStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
