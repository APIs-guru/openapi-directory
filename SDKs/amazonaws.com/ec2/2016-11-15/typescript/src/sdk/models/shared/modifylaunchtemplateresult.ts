import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplate } from "./launchtemplate";



export class ModifyLaunchTemplateResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplate?: LaunchTemplate;
}
