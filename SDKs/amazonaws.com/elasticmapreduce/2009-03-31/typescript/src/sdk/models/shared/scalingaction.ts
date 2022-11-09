import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketTypeEnum } from "./markettypeenum";
import { SimpleScalingPolicyConfiguration } from "./simplescalingpolicyconfiguration";


// ScalingAction
/** 
 * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
**/
export class ScalingAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @Metadata({ data: "json, name=SimpleScalingPolicyConfiguration" })
  simpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
