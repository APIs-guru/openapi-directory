import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplate } from "./launchtemplate";



export class DeleteLaunchTemplateResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplate?: LaunchTemplate;
}
