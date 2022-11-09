import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Certificate } from "./certificate";


// ListCertificatesResponse
/** 
 * The output of the ListCertificates operation.
**/
export class ListCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.Certificate })
  certificates?: Certificate[];

  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;
}
