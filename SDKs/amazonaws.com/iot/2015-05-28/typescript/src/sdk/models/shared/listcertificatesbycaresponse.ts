import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



// ListCertificatesByCaResponse
/** 
 * The output of the ListCertificatesByCA operation.
**/
export class ListCertificatesByCaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
