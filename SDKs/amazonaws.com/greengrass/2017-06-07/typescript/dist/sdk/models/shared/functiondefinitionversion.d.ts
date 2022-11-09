import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionDefaultConfig } from "./functiondefaultconfig";
import { Function } from "./function";
/**
 * Information about a function definition version.
**/
export declare class FunctionDefinitionVersion extends SpeakeasyBase {
    defaultConfig?: FunctionDefaultConfig;
    functions?: Function[];
}
