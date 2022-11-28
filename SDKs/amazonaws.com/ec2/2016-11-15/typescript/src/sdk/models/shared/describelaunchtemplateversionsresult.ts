import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateVersion } from "./launchtemplateversion";



export class DescribeLaunchTemplateVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LaunchTemplateVersion })
  launchTemplateVersions?: LaunchTemplateVersion[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
