import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sends an input to an IoT Events detector.
**/
export declare class IotEventsAction extends SpeakeasyBase {
    batchMode?: boolean;
    inputName: string;
    messageId?: string;
    roleArn: string;
}
