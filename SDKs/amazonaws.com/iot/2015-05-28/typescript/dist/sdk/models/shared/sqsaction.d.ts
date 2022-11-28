import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action to publish data to an Amazon SQS queue.
**/
export declare class SqsAction extends SpeakeasyBase {
    queueUrl: string;
    roleArn: string;
    useBase64?: boolean;
}
