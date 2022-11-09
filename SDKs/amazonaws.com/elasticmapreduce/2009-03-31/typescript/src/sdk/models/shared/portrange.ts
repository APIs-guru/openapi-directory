import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortRange
/** 
 * A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.
**/
export class PortRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxRange" })
  maxRange?: number;

  @Metadata({ data: "json, name=MinRange" })
  minRange: number;
}
