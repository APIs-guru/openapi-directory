import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageBuilderStateChangeReasonCodeEnum } from "./imagebuilderstatechangereasoncodeenum";
/**
 * Describes the reason why the last image builder state change occurred.
**/
export declare class ImageBuilderStateChangeReason extends SpeakeasyBase {
    code?: ImageBuilderStateChangeReasonCodeEnum;
    message?: string;
}
