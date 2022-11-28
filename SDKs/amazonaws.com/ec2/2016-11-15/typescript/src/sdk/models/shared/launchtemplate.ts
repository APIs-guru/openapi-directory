import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// LaunchTemplate
/** 
 * Describes a launch template.
**/
export class LaunchTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata()
  createdBy?: string;

  @SpeakeasyMetadata()
  defaultVersionNumber?: number;

  @SpeakeasyMetadata()
  latestVersionNumber?: number;

  @SpeakeasyMetadata()
  launchTemplateId?: string;

  @SpeakeasyMetadata()
  launchTemplateName?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
