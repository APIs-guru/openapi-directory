import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteTable } from "./routetable";



// DescribeRouteTablesResult
/** 
 * Contains the output of DescribeRouteTables.
**/
export class DescribeRouteTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: RouteTable })
  routeTables?: RouteTable[];
}
