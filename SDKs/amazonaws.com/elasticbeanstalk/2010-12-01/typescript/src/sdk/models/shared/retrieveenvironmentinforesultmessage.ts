import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInfoDescription } from "./environmentinfodescription";



// RetrieveEnvironmentInfoResultMessage
/** 
 * Result message containing a description of the requested environment info.
**/
export class RetrieveEnvironmentInfoResultMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EnvironmentInfoDescription })
  environmentInfo?: EnvironmentInfoDescription[];
}
