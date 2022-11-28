import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentVariableTypeEnum } from "./environmentvariabletypeenum";
/**
 * Information about an environment variable for a build project or a build.
**/
export declare class EnvironmentVariable extends SpeakeasyBase {
    name: string;
    type?: EnvironmentVariableTypeEnum;
    value: string;
}
