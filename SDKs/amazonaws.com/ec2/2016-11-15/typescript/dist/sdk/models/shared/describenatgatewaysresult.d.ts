import { SpeakeasyBase } from "../../../internal/utils";
import { NatGateway } from "./natgateway";
export declare class DescribeNatGatewaysResult extends SpeakeasyBase {
    natGateways?: NatGateway[];
    nextToken?: string;
}
