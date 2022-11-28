import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentDescription } from "./environmentdescription";



// EnvironmentDescriptionsMessage
/** 
 * Result message containing a list of environment descriptions.
**/
export class EnvironmentDescriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EnvironmentDescription })
  environments?: EnvironmentDescription[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
