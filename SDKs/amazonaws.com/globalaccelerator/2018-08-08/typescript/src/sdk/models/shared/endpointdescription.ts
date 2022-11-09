import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthStateEnum } from "./healthstateenum";


// EndpointDescription
/** 
 * A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
**/
export class EndpointDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientIPPreservationEnabled" })
  clientIpPreservationEnabled?: boolean;

  @Metadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @Metadata({ data: "json, name=HealthReason" })
  healthReason?: string;

  @Metadata({ data: "json, name=HealthState" })
  healthState?: HealthStateEnum;

  @Metadata({ data: "json, name=Weight" })
  weight?: number;
}
