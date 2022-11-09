import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOnPremisesInstanceInput
/** 
 *  Represents the input of a <code>GetOnPremisesInstance</code> operation. 
**/
export class GetOnPremisesInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
