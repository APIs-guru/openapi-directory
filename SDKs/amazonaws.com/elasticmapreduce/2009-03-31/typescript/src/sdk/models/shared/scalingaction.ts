import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketTypeEnum } from "./markettypeenum";
import { SimpleScalingPolicyConfiguration } from "./simplescalingpolicyconfiguration";



// ScalingAction
/** 
 * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
**/
export class ScalingAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SimpleScalingPolicyConfiguration" })
  simpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
