import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventInformation
/** 
 * Describes an EC2 Fleet or Spot Fleet event.
**/
export class EventInformation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventDescription?: string;

  @SpeakeasyMetadata()
  eventSubType?: string;

  @SpeakeasyMetadata()
  instanceId?: string;
}
