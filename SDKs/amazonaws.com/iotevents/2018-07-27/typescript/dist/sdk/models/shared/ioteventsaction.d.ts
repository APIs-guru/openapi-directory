import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Payload } from "./payload";
/**
 * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
**/
export declare class IotEventsAction extends SpeakeasyBase {
    inputName: string;
    payload?: Payload;
}
