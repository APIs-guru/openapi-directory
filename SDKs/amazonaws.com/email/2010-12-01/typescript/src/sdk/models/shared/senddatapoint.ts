import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendDataPoint
/** 
 * Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. 
**/
export class SendDataPoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bounces?: number;

  @SpeakeasyMetadata()
  complaints?: number;

  @SpeakeasyMetadata()
  deliveryAttempts?: number;

  @SpeakeasyMetadata()
  rejects?: number;

  @SpeakeasyMetadata()
  timestamp?: Date;
}
