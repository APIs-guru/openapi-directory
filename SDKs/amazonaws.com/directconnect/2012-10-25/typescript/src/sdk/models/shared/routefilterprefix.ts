import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RouteFilterPrefix
/** 
 * Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
**/
export class RouteFilterPrefix extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidr" })
  cidr?: string;
}
