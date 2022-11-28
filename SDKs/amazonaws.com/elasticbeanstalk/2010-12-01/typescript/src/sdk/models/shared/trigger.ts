import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Trigger
/** 
 * Describes a trigger.
**/
export class Trigger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;
}
