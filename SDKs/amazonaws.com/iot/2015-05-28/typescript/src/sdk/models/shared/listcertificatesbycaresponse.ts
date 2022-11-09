import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Certificate } from "./certificate";


// ListCertificatesByCaResponse
/** 
 * The output of the ListCertificatesByCA operation.
**/
export class ListCertificatesByCaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.Certificate })
  certificates?: Certificate[];

  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
