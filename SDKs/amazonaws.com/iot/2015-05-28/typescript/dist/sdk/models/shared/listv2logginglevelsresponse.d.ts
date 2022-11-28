import { SpeakeasyBase } from "../../../internal/utils";
import { LogTargetConfiguration } from "./logtargetconfiguration";
export declare class ListV2LoggingLevelsResponse extends SpeakeasyBase {
    logTargetConfigurations?: LogTargetConfiguration[];
    nextToken?: string;
}
