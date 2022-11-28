import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointConfiguration
/** 
 * A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
**/
export class EndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientIPPreservationEnabled" })
  clientIpPreservationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=Weight" })
  weight?: number;
}
