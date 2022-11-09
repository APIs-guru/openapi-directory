import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggerDefinitionVersion } from "./loggerdefinitionversion";
export declare class GetLoggerDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: LoggerDefinitionVersion;
    id?: string;
    version?: string;
}
