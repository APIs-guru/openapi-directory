import { SpeakeasyBase } from "../../../internal/utils";
import { MarketTypeEnum } from "./markettypeenum";
import { LaunchTemplateSpotMarketOptions } from "./launchtemplatespotmarketoptions";
/**
 * The market (purchasing) option for the instances.
**/
export declare class LaunchTemplateInstanceMarketOptions extends SpeakeasyBase {
    marketType?: MarketTypeEnum;
    spotOptions?: LaunchTemplateSpotMarketOptions;
}
