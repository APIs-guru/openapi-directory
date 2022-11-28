import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseError } from "./responseerror";



// DeleteLaunchTemplateVersionsResponseErrorItem
/** 
 * Describes a launch template version that could not be deleted.
**/
export class DeleteLaunchTemplateVersionsResponseErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateId?: string;

  @SpeakeasyMetadata()
  launchTemplateName?: string;

  @SpeakeasyMetadata()
  responseError?: ResponseError;

  @SpeakeasyMetadata()
  versionNumber?: number;
}
