import { SpeakeasyBase } from "../../../internal/utils";
import { IpRouteInfo } from "./iprouteinfo";
export declare class ListIpRoutesResult extends SpeakeasyBase {
    ipRoutesInfo?: IpRouteInfo[];
    nextToken?: string;
}
