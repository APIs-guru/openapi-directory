import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExpectedRoute
/** 
 * Information about the expected route in the route table.
**/
export class ExpectedRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedTargets" })
  allowedTargets?: string[];

  @Metadata({ data: "json, name=ContributingSubnets" })
  contributingSubnets?: string[];

  @Metadata({ data: "json, name=IpV4Cidr" })
  ipV4Cidr?: string;

  @Metadata({ data: "json, name=IpV6Cidr" })
  ipV6Cidr?: string;

  @Metadata({ data: "json, name=PrefixListId" })
  prefixListId?: string;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;
}
