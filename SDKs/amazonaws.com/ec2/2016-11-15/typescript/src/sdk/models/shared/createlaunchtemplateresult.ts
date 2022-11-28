import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplate } from "./launchtemplate";
import { ValidationWarning } from "./validationwarning";



export class CreateLaunchTemplateResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplate?: LaunchTemplate;

  @SpeakeasyMetadata()
  warning?: ValidationWarning;
}
