import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceInfo } from "./instanceinfo";


// GetOnPremisesInstanceOutput
/** 
 *  Represents the output of a <code>GetOnPremisesInstance</code> operation. 
**/
export class GetOnPremisesInstanceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceInfo" })
  instanceInfo?: InstanceInfo;
}
