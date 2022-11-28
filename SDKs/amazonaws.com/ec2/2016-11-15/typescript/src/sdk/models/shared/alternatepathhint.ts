import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlternatePathHint
/** 
 * Describes an potential intermediate component of a feasible path.
**/
export class AlternatePathHint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  componentArn?: string;

  @SpeakeasyMetadata()
  componentId?: string;
}
