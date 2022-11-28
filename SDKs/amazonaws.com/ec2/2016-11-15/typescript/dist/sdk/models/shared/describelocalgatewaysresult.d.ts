import { SpeakeasyBase } from "../../../internal/utils";
import { LocalGateway } from "./localgateway";
export declare class DescribeLocalGatewaysResult extends SpeakeasyBase {
    localGateways?: LocalGateway[];
    nextToken?: string;
}
