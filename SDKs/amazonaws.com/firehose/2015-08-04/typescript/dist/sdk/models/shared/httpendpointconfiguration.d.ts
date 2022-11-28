import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
**/
export declare class HttpEndpointConfiguration extends SpeakeasyBase {
    accessKey?: string;
    name?: string;
    url: string;
}
