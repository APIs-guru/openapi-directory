import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpotInstanceStatus
/** 
 * Describes the status of a Spot Instance request.
**/
export class SpotInstanceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  updateTime?: Date;
}
