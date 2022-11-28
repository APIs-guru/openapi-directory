import { SpeakeasyBase } from "../../../internal/utils";
import { InspectorEventEnum } from "./inspectoreventenum";
export declare class SubscribeToEventRequest extends SpeakeasyBase {
    event: InspectorEventEnum;
    resourceArn: string;
    topicArn: string;
}
