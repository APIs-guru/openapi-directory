import { SpeakeasyBase } from "../../../internal/utils";
import { LogDriverEnum } from "./logdriverenum";
import { Secret } from "./secret";
/**
 * Log configuration options to send to a custom log driver for the container.
**/
export declare class LogConfiguration extends SpeakeasyBase {
    logDriver: LogDriverEnum;
    options?: Map<string, string>;
    secretOptions?: Secret[];
}
