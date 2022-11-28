import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetDescription } from "./targetdescription";
import { TargetHealth } from "./targethealth";



// TargetHealthDescription
/** 
 * Information about the health of a target.
**/
export class TargetHealthDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  healthCheckPort?: string;

  @SpeakeasyMetadata()
  target?: TargetDescription;

  @SpeakeasyMetadata()
  targetHealth?: TargetHealth;
}
