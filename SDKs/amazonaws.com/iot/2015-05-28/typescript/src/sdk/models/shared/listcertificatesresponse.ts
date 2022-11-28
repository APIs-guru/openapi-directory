import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



// ListCertificatesResponse
/** 
 * The output of the ListCertificates operation.
**/
export class ListCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
