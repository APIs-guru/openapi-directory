import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmiDistributionConfiguration } from "./amidistributionconfiguration";
import { ContainerDistributionConfiguration } from "./containerdistributionconfiguration";
import { LaunchTemplateConfiguration } from "./launchtemplateconfiguration";



// Distribution
/** 
 *  Defines the settings for a specific Region.
**/
export class Distribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amiDistributionConfiguration" })
  amiDistributionConfiguration?: AmiDistributionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=containerDistributionConfiguration" })
  containerDistributionConfiguration?: ContainerDistributionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=launchTemplateConfigurations", elemType: LaunchTemplateConfiguration })
  launchTemplateConfigurations?: LaunchTemplateConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=licenseConfigurationArns" })
  licenseConfigurationArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}
