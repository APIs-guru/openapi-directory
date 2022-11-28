import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchTemplateHibernationOptions
/** 
 * Indicates whether an instance is configured for hibernation.
**/
export class LaunchTemplateHibernationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configured?: boolean;
}
