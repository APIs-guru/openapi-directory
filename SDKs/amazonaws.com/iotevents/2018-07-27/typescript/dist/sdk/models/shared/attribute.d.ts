import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors.
**/
export declare class Attribute extends SpeakeasyBase {
    jsonPath: string;
}
