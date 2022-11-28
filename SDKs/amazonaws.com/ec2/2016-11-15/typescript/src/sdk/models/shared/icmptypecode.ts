import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IcmpTypeCode
/** 
 * Describes the ICMP type and code.
**/
export class IcmpTypeCode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: number;

  @SpeakeasyMetadata()
  type?: number;
}
