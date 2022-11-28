import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateVersion } from "./launchtemplateversion";
import { ValidationWarning } from "./validationwarning";



export class CreateLaunchTemplateVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateVersion?: LaunchTemplateVersion;

  @SpeakeasyMetadata()
  warning?: ValidationWarning;
}
