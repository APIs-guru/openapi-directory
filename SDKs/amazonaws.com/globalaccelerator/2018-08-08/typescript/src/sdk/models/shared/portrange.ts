import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortRange
/** 
 * A complex type for a range of ports for a listener.
**/
export class PortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ToPort" })
  toPort?: number;
}
