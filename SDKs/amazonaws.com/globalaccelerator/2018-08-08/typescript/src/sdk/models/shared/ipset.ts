import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpSet
/** 
 * A complex type for the set of IP addresses for an accelerator.
**/
export class IpSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=IpAddresses" })
  ipAddresses?: string[];

  @Metadata({ data: "json, name=IpFamily" })
  ipFamily?: string;
}
