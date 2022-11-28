import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseLaunchTemplateData } from "./responselaunchtemplatedata";



// LaunchTemplateVersion
/** 
 * Describes a launch template version.
**/
export class LaunchTemplateVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata()
  createdBy?: string;

  @SpeakeasyMetadata()
  defaultVersion?: boolean;

  @SpeakeasyMetadata()
  launchTemplateData?: ResponseLaunchTemplateData;

  @SpeakeasyMetadata()
  launchTemplateId?: string;

  @SpeakeasyMetadata()
  launchTemplateName?: string;

  @SpeakeasyMetadata()
  versionDescription?: string;

  @SpeakeasyMetadata()
  versionNumber?: number;
}
