import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnEnterLifecycle } from "./onenterlifecycle";
import { OnExitLifecycle } from "./onexitlifecycle";
import { OnInputLifecycle } from "./oninputlifecycle";


// State
/** 
 * Information that defines a state of a detector.
**/
export class State extends SpeakeasyBase {
  @Metadata({ data: "json, name=onEnter" })
  onEnter?: OnEnterLifecycle;

  @Metadata({ data: "json, name=onExit" })
  onExit?: OnExitLifecycle;

  @Metadata({ data: "json, name=onInput" })
  onInput?: OnInputLifecycle;

  @Metadata({ data: "json, name=stateName" })
  stateName: string;
}
