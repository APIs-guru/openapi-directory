import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action to republish to another topic.
**/
export declare class RepublishAction extends SpeakeasyBase {
    qos?: number;
    roleArn: string;
    topic: string;
}
