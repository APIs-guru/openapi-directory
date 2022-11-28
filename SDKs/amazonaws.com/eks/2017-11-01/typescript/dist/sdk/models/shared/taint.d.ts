import { SpeakeasyBase } from "../../../internal/utils";
import { TaintEffectEnum } from "./tainteffectenum";
/**
 * A property that allows a node to repel a set of pods.
**/
export declare class Taint extends SpeakeasyBase {
    effect?: TaintEffectEnum;
    key?: string;
    value?: string;
}
