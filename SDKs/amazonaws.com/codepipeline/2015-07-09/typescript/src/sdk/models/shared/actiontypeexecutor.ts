import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutorConfiguration } from "./executorconfiguration";
import { ExecutorTypeEnum } from "./executortypeenum";


// ActionTypeExecutor
/** 
 * The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.
**/
export class ActionTypeExecutor extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration: ExecutorConfiguration;

  @Metadata({ data: "json, name=jobTimeout" })
  jobTimeout?: number;

  @Metadata({ data: "json, name=policyStatementsTemplate" })
  policyStatementsTemplate?: string;

  @Metadata({ data: "json, name=type" })
  type: ExecutorTypeEnum;
}
