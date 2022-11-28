import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaintEffectEnum } from "./tainteffectenum";



// Taint
/** 
 * A property that allows a node to repel a set of pods.
**/
export class Taint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effect" })
  effect?: TaintEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
