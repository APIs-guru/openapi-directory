import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationDeploymentStatusEnum } from "./configurationdeploymentstatusenum";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";



// ConfigurationSettingsDescription
/** 
 * Describes the settings for a configuration set.
**/
export class ConfigurationSettingsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationName?: string;

  @SpeakeasyMetadata()
  dateCreated?: Date;

  @SpeakeasyMetadata()
  dateUpdated?: Date;

  @SpeakeasyMetadata()
  deploymentStatus?: ConfigurationDeploymentStatusEnum;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  environmentName?: string;

  @SpeakeasyMetadata({ elemType: ConfigurationOptionSetting })
  optionSettings?: ConfigurationOptionSetting[];

  @SpeakeasyMetadata()
  platformArn?: string;

  @SpeakeasyMetadata()
  solutionStackName?: string;

  @SpeakeasyMetadata()
  templateName?: string;
}
