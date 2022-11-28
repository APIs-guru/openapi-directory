import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnEnterLifecycle } from "./onenterlifecycle";
import { OnExitLifecycle } from "./onexitlifecycle";
import { OnInputLifecycle } from "./oninputlifecycle";



// State
/** 
 * Information that defines a state of a detector.
**/
export class State extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onEnter" })
  onEnter?: OnEnterLifecycle;

  @SpeakeasyMetadata({ data: "json, name=onExit" })
  onExit?: OnExitLifecycle;

  @SpeakeasyMetadata({ data: "json, name=onInput" })
  onInput?: OnInputLifecycle;

  @SpeakeasyMetadata({ data: "json, name=stateName" })
  stateName: string;
}
