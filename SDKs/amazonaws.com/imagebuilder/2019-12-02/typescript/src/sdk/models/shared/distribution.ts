import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AmiDistributionConfiguration } from "./amidistributionconfiguration";
import { ContainerDistributionConfiguration } from "./containerdistributionconfiguration";
import { LaunchTemplateConfiguration } from "./launchtemplateconfiguration";


// Distribution
/** 
 *  Defines the settings for a specific Region.
**/
export class Distribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=amiDistributionConfiguration" })
  amiDistributionConfiguration?: AmiDistributionConfiguration;

  @Metadata({ data: "json, name=containerDistributionConfiguration" })
  containerDistributionConfiguration?: ContainerDistributionConfiguration;

  @Metadata({ data: "json, name=launchTemplateConfigurations", elemType: shared.LaunchTemplateConfiguration })
  launchTemplateConfigurations?: LaunchTemplateConfiguration[];

  @Metadata({ data: "json, name=licenseConfigurationArns" })
  licenseConfigurationArns?: string[];

  @Metadata({ data: "json, name=region" })
  region: string;
}
