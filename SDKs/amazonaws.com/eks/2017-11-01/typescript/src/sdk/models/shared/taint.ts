import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaintEffectEnum } from "./tainteffectenum";


// Taint
/** 
 * A property that allows a node to repel a set of pods.
**/
export class Taint extends SpeakeasyBase {
  @Metadata({ data: "json, name=effect" })
  effect?: TaintEffectEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
