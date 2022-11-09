import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CaCertificate } from "./cacertificate";


// ListCaCertificatesResponse
/** 
 * The output from the ListCACertificates operation.
**/
export class ListCaCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.CaCertificate })
  certificates?: CaCertificate[];

  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
