import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentResourceDescription } from "./environmentresourcedescription";



// EnvironmentResourceDescriptionsMessage
/** 
 * Result message containing a list of environment resource descriptions.
**/
export class EnvironmentResourceDescriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  environmentResources?: EnvironmentResourceDescription;
}
