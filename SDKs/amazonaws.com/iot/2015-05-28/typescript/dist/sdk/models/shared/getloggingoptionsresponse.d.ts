import { SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";
/**
 * The output from the GetLoggingOptions operation.
**/
export declare class GetLoggingOptionsResponse extends SpeakeasyBase {
    logLevel?: LogLevelEnum;
    roleArn?: string;
}
