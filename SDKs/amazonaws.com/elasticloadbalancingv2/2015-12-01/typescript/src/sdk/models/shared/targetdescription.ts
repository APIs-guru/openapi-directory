import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetDescription
/** 
 * Information about a target.
**/
export class TargetDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  port?: number;
}
