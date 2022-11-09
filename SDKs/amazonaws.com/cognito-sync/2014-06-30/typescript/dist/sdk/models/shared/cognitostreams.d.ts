import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingStatusEnum } from "./streamingstatusenum";
/**
 * Configuration options for configure Cognito streams.
**/
export declare class CognitoStreams extends SpeakeasyBase {
    roleArn?: string;
    streamName?: string;
    streamingStatus?: StreamingStatusEnum;
}
