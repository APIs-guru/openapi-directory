import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateMetadata } from "./servercertificatemetadata";



// ListServerCertificatesResponse
/** 
 * Contains the response to a successful <a>ListServerCertificates</a> request. 
**/
export class ListServerCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ServerCertificateMetadata })
  serverCertificateMetadataList: ServerCertificateMetadata[];
}
