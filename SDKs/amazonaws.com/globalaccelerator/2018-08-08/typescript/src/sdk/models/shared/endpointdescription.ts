import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthStateEnum } from "./healthstateenum";



// EndpointDescription
/** 
 * A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
**/
export class EndpointDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientIPPreservationEnabled" })
  clientIpPreservationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthReason" })
  healthReason?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthState" })
  healthState?: HealthStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Weight" })
  weight?: number;
}
