import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpoint } from "./clientvpnendpoint";
export declare class DescribeClientVpnEndpointsResult extends SpeakeasyBase {
    clientVpnEndpoints?: ClientVpnEndpoint[];
    nextToken?: string;
}
