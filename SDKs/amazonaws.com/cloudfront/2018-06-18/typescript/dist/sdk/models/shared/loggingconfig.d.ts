import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that controls whether access logs are written for the distribution.
**/
export declare class LoggingConfig extends SpeakeasyBase {
    bucket: string;
    enabled: boolean;
    includeCookies: boolean;
    prefix: string;
}
