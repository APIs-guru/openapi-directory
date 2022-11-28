import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOnPremisesInstanceInput
/** 
 *  Represents the input of a <code>GetOnPremisesInstance</code> operation. 
**/
export class GetOnPremisesInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
