import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PtrUpdateStatus } from "./ptrupdatestatus";



// AddressAttribute
/** 
 * The attributes associated with an Elastic IP address.
**/
export class AddressAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: string;

  @SpeakeasyMetadata()
  ptrRecord?: string;

  @SpeakeasyMetadata()
  ptrRecordUpdate?: PtrUpdateStatus;

  @SpeakeasyMetadata()
  publicIp?: string;
}
