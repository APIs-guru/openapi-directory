import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaCertificate } from "./cacertificate";



// ListCaCertificatesResponse
/** 
 * The output from the ListCACertificates operation.
**/
export class ListCaCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: CaCertificate })
  certificates?: CaCertificate[];

  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
