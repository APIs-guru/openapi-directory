import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExpectedRoute
/** 
 * Information about the expected route in the route table.
**/
export class ExpectedRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedTargets" })
  allowedTargets?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContributingSubnets" })
  contributingSubnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=IpV4Cidr" })
  ipV4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=IpV6Cidr" })
  ipV6Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=PrefixListId" })
  prefixListId?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId?: string;
}
