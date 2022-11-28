import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Endpoint
/** 
 * Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  hostedZoneId?: string;

  @SpeakeasyMetadata()
  port?: number;
}
