import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpSet
/** 
 * A complex type for the set of IP addresses for an accelerator.
**/
export class IpSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IpAddresses" })
  ipAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=IpFamily" })
  ipFamily?: string;
}
