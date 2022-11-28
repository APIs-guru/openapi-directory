import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrafficMirrorPortRange
/** 
 * Describes the Traffic Mirror port range.
**/
export class TrafficMirrorPortRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fromPort?: number;

  @SpeakeasyMetadata()
  toPort?: number;
}
