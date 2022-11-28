import { SpeakeasyBase } from "../../../internal/utils";
import { InspectorEventEnum } from "./inspectoreventenum";
export declare class UnsubscribeFromEventRequest extends SpeakeasyBase {
    event: InspectorEventEnum;
    resourceArn: string;
    topicArn: string;
}
