import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RouteFilterPrefix
/** 
 * Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
**/
export class RouteFilterPrefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;
}
