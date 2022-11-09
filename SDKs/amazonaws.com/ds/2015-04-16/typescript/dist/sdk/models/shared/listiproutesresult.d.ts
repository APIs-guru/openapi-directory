import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpRouteInfo } from "./iprouteinfo";
export declare class ListIpRoutesResult extends SpeakeasyBase {
    ipRoutesInfo?: IpRouteInfo[];
    nextToken?: string;
}
