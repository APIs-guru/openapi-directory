import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketTypeEnum } from "./markettypeenum";
import { LaunchTemplateSpotMarketOptions } from "./launchtemplatespotmarketoptions";



// LaunchTemplateInstanceMarketOptions
/** 
 * The market (purchasing) option for the instances.
**/
export class LaunchTemplateInstanceMarketOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marketType?: MarketTypeEnum;

  @SpeakeasyMetadata()
  spotOptions?: LaunchTemplateSpotMarketOptions;
}
