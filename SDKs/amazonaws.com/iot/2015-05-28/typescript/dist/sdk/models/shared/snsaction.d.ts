import { SpeakeasyBase } from "../../../internal/utils";
import { MessageFormatEnum } from "./messageformatenum";
/**
 * Describes an action to publish to an Amazon SNS topic.
**/
export declare class SnsAction extends SpeakeasyBase {
    messageFormat?: MessageFormatEnum;
    roleArn: string;
    targetArn: string;
}
