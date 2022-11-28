import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortRange
/** 
 * Describes a range of ports.
**/
export class PortRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  from?: number;

  @SpeakeasyMetadata()
  to?: number;
}
