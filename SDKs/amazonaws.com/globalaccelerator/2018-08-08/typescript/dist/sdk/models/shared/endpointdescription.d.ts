import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStateEnum } from "./healthstateenum";
/**
 * A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
**/
export declare class EndpointDescription extends SpeakeasyBase {
    clientIpPreservationEnabled?: boolean;
    endpointId?: string;
    healthReason?: string;
    healthState?: HealthStateEnum;
    weight?: number;
}
