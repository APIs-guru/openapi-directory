import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutorConfiguration } from "./executorconfiguration";
import { ExecutorTypeEnum } from "./executortypeenum";
/**
 * The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.
**/
export declare class ActionTypeExecutor extends SpeakeasyBase {
    configuration: ExecutorConfiguration;
    jobTimeout?: number;
    policyStatementsTemplate?: string;
    type: ExecutorTypeEnum;
}
