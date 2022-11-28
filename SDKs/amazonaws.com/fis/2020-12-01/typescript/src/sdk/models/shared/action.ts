import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionParameter } from "./actionparameter";
import { ActionTarget } from "./actiontarget";



// Action
/** 
 * Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">AWS FIS actions</a> in the <i>AWS Fault Injection Simulator User Guide</i>.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ActionParameter })
  parameters?: Map<string, ActionParameter>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: ActionTarget })
  targets?: Map<string, ActionTarget>;
}
