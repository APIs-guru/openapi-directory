import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionParameter } from "./actionparameter";
import { ActionTarget } from "./actiontarget";
/**
 * Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">AWS FIS actions</a> in the <i>AWS Fault Injection Simulator User Guide</i>.
**/
export declare class Action extends SpeakeasyBase {
    description?: string;
    id?: string;
    parameters?: Map<string, ActionParameter>;
    tags?: Map<string, string>;
    targets?: Map<string, ActionTarget>;
}
