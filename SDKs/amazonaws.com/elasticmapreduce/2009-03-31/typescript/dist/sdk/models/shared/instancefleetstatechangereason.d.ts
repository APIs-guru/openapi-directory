import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetStateChangeReasonCodeEnum } from "./instancefleetstatechangereasoncodeenum";
/**
 * <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export declare class InstanceFleetStateChangeReason extends SpeakeasyBase {
    code?: InstanceFleetStateChangeReasonCodeEnum;
    message?: string;
}
