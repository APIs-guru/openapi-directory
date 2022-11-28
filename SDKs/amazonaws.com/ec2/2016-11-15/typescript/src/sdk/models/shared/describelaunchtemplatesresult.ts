import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplate } from "./launchtemplate";



export class DescribeLaunchTemplatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LaunchTemplate })
  launchTemplates?: LaunchTemplate[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
