import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaAction } from "./lambdaaction";
/**
 * Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.
**/
export declare class NotificationTargetActions extends SpeakeasyBase {
    lambdaAction?: LambdaAction;
}
