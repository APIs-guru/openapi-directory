import { SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
/**
 * StartTaskExecutionRequest
**/
export declare class StartTaskExecutionRequest extends SpeakeasyBase {
    excludes?: FilterRule[];
    includes?: FilterRule[];
    overrideOptions?: Options;
    taskArn: string;
}
