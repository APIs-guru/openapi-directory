import { SpeakeasyBase } from "../../../internal/utils";
import { RouteTable } from "./routetable";
/**
 * Contains the output of DescribeRouteTables.
**/
export declare class DescribeRouteTablesResult extends SpeakeasyBase {
    nextToken?: string;
    routeTables?: RouteTable[];
}
