import { SpeakeasyBase } from "../../../internal/utils";
import { IpRouteStatusMsgEnum } from "./iproutestatusmsgenum";
/**
 * Information about one or more IP address blocks.
**/
export declare class IpRouteInfo extends SpeakeasyBase {
    addedDateTime?: Date;
    cidrIp?: string;
    description?: string;
    directoryId?: string;
    ipRouteStatusMsg?: IpRouteStatusMsgEnum;
    ipRouteStatusReason?: string;
}
