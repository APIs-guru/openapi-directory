import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetryActionEnum } from "./retryactionenum";


// EvaluateOnExit
/** 
 * Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
**/
export class EvaluateOnExit extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: RetryActionEnum;

  @Metadata({ data: "json, name=onExitCode" })
  onExitCode?: string;

  @Metadata({ data: "json, name=onReason" })
  onReason?: string;

  @Metadata({ data: "json, name=onStatusReason" })
  onStatusReason?: string;
}
