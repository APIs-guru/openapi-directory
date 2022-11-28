import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetryActionEnum } from "./retryactionenum";



// EvaluateOnExit
/** 
 * Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
**/
export class EvaluateOnExit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: RetryActionEnum;

  @SpeakeasyMetadata({ data: "json, name=onExitCode" })
  onExitCode?: string;

  @SpeakeasyMetadata({ data: "json, name=onReason" })
  onReason?: string;

  @SpeakeasyMetadata({ data: "json, name=onStatusReason" })
  onStatusReason?: string;
}
