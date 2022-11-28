import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceInfo } from "./instanceinfo";



// GetOnPremisesInstanceOutput
/** 
 *  Represents the output of a <code>GetOnPremisesInstance</code> operation. 
**/
export class GetOnPremisesInstanceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceInfo" })
  instanceInfo?: InstanceInfo;
}
