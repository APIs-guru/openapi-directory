import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThingConnectivity
/** 
 * The connectivity status of the thing.
**/
export class ThingConnectivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=connected" })
  connected?: boolean;

  @Metadata({ data: "json, name=disconnectReason" })
  disconnectReason?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
