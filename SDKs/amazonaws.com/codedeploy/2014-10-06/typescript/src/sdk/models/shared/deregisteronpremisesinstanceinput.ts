import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeregisterOnPremisesInstanceInput
/** 
 * Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.
**/
export class DeregisterOnPremisesInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
