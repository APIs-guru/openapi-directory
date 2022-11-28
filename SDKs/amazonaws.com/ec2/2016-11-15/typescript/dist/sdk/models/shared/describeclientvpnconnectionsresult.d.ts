import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnConnection } from "./clientvpnconnection";
export declare class DescribeClientVpnConnectionsResult extends SpeakeasyBase {
    connections?: ClientVpnConnection[];
    nextToken?: string;
}
