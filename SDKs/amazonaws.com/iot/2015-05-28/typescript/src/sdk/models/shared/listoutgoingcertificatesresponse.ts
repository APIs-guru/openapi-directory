import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutgoingCertificate } from "./outgoingcertificate";



// ListOutgoingCertificatesResponse
/** 
 * The output from the ListOutgoingCertificates operation.
**/
export class ListOutgoingCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=outgoingCertificates", elemType: OutgoingCertificate })
  outgoingCertificates?: OutgoingCertificate[];
}
