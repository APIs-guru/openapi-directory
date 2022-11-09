import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutgoingCertificate } from "./outgoingcertificate";


// ListOutgoingCertificatesResponse
/** 
 * The output from the ListOutgoingCertificates operation.
**/
export class ListOutgoingCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=outgoingCertificates", elemType: shared.OutgoingCertificate })
  outgoingCertificates?: OutgoingCertificate[];
}
