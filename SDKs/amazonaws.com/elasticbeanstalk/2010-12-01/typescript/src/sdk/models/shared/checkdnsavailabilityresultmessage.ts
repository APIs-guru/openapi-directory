import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckDnsAvailabilityResultMessage
/** 
 * Indicates if the specified CNAME is available.
**/
export class CheckDnsAvailabilityResultMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  available?: boolean;

  @SpeakeasyMetadata()
  fullyQualifiedCname?: string;
}
