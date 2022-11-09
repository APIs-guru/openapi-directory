import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointConfiguration
/** 
 * A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
**/
export class EndpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientIPPreservationEnabled" })
  clientIpPreservationEnabled?: boolean;

  @Metadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @Metadata({ data: "json, name=Weight" })
  weight?: number;
}
