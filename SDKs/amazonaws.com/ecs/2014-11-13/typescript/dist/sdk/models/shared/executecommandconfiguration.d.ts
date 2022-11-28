import { SpeakeasyBase } from "../../../internal/utils";
import { ExecuteCommandLogConfiguration } from "./executecommandlogconfiguration";
import { ExecuteCommandLoggingEnum } from "./executecommandloggingenum";
/**
 * The details of the execute command configuration.
**/
export declare class ExecuteCommandConfiguration extends SpeakeasyBase {
    kmsKeyId?: string;
    logConfiguration?: ExecuteCommandLogConfiguration;
    logging?: ExecuteCommandLoggingEnum;
}
