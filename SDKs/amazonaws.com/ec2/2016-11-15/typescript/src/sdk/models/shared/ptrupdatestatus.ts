import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PtrUpdateStatus
/** 
 * The status of an updated pointer (PTR) record for an Elastic IP address.
**/
export class PtrUpdateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reason?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  value?: string;
}
