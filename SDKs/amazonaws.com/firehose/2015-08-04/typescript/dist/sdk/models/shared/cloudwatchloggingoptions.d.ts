import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the Amazon CloudWatch logging options for your delivery stream.
**/
export declare class CloudWatchLoggingOptions extends SpeakeasyBase {
    enabled?: boolean;
    logGroupName?: string;
    logStreamName?: string;
}
