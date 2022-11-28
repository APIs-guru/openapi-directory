import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that controls whether access logs are written for this streaming distribution.
**/
export declare class StreamingLoggingConfig extends SpeakeasyBase {
    bucket: string;
    enabled: boolean;
    prefix: string;
}
