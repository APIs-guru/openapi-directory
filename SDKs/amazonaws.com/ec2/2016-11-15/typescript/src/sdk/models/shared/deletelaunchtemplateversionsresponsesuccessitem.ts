import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteLaunchTemplateVersionsResponseSuccessItem
/** 
 * Describes a launch template version that was successfully deleted.
**/
export class DeleteLaunchTemplateVersionsResponseSuccessItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateId?: string;

  @SpeakeasyMetadata()
  launchTemplateName?: string;

  @SpeakeasyMetadata()
  versionNumber?: number;
}
