import { SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";
/**
 * Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
**/
export declare class EnableIoTLoggingParams extends SpeakeasyBase {
    logLevel: LogLevelEnum;
    roleArnForLogging: string;
}
