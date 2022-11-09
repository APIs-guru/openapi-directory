import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortRange
/** 
 * A complex type for a range of ports for a listener.
**/
export class PortRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "json, name=ToPort" })
  toPort?: number;
}
