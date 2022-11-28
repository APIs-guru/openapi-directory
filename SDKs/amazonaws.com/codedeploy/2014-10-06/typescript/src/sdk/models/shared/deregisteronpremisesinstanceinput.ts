import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeregisterOnPremisesInstanceInput
/** 
 * Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.
**/
export class DeregisterOnPremisesInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
