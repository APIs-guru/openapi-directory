import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThingConnectivity
/** 
 * The connectivity status of the thing.
**/
export class ThingConnectivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connected" })
  connected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disconnectReason" })
  disconnectReason?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
