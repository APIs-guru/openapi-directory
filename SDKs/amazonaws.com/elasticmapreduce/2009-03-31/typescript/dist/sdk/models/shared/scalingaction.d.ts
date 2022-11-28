import { SpeakeasyBase } from "../../../internal/utils";
import { MarketTypeEnum } from "./markettypeenum";
import { SimpleScalingPolicyConfiguration } from "./simplescalingpolicyconfiguration";
/**
 * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
**/
export declare class ScalingAction extends SpeakeasyBase {
    market?: MarketTypeEnum;
    simpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
