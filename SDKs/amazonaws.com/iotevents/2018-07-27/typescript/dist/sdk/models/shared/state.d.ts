import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OnEnterLifecycle } from "./onenterlifecycle";
import { OnExitLifecycle } from "./onexitlifecycle";
import { OnInputLifecycle } from "./oninputlifecycle";
/**
 * Information that defines a state of a detector.
**/
export declare class State extends SpeakeasyBase {
    onEnter?: OnEnterLifecycle;
    onExit?: OnExitLifecycle;
    onInput?: OnInputLifecycle;
    stateName: string;
}
