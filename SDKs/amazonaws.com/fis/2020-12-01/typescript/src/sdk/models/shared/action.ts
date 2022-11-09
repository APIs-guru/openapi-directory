import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionParameter } from "./actionparameter";
import { ActionTarget } from "./actiontarget";


// Action
/** 
 * Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">AWS FIS actions</a> in the <i>AWS Fault Injection Simulator User Guide</i>.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.ActionParameter })
  parameters?: Map<string, ActionParameter>;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targets", elemType: shared.ActionTarget })
  targets?: Map<string, ActionTarget>;
}
