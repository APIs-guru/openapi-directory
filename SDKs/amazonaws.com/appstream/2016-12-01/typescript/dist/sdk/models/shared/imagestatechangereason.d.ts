import { SpeakeasyBase } from "../../../internal/utils";
import { ImageStateChangeReasonCodeEnum } from "./imagestatechangereasoncodeenum";
/**
 * Describes the reason why the last image state change occurred.
**/
export declare class ImageStateChangeReason extends SpeakeasyBase {
    code?: ImageStateChangeReasonCodeEnum;
    message?: string;
}
