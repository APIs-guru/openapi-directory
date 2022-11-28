import { SpeakeasyBase } from "../../../internal/utils";
import { AmiDistributionConfiguration } from "./amidistributionconfiguration";
import { ContainerDistributionConfiguration } from "./containerdistributionconfiguration";
import { LaunchTemplateConfiguration } from "./launchtemplateconfiguration";
/**
 *  Defines the settings for a specific Region.
**/
export declare class Distribution extends SpeakeasyBase {
    amiDistributionConfiguration?: AmiDistributionConfiguration;
    containerDistributionConfiguration?: ContainerDistributionConfiguration;
    launchTemplateConfigurations?: LaunchTemplateConfiguration[];
    licenseConfigurationArns?: string[];
    region: string;
}
