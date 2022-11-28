import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionLogResponseOptions
/** 
 * Information about the client connection logging options for a Client VPN endpoint.
**/
export class ConnectionLogResponseOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudwatchLogGroup?: string;

  @SpeakeasyMetadata()
  cloudwatchLogStream?: string;

  @SpeakeasyMetadata()
  enabled?: boolean;
}
