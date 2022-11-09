import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WeightedTarget
/** 
 * An object representing a target and its relative weight. Traffic is distributed across
 *          targets according to their relative weight. For example, a weighted target with a relative
 *          weight of 50 receives five times as much traffic as one with a relative weight of
 *          10.
**/
export class WeightedTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNode" })
  virtualNode?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
