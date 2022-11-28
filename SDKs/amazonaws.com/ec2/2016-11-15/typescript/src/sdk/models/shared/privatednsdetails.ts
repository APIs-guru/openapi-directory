import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateDnsDetails
/** 
 * Information about the Private DNS name for interface endpoints.
**/
export class PrivateDnsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  privateDnsName?: string;
}
