import { SpeakeasyBase } from "../../../internal/utils";
import { TransitGateway } from "./transitgateway";
export declare class DescribeTransitGatewaysResult extends SpeakeasyBase {
    nextToken?: string;
    transitGateways?: TransitGateway[];
}
