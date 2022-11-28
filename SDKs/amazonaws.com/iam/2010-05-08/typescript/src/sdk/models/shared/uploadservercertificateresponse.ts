import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateMetadata } from "./servercertificatemetadata";
import { Tag } from "./tag";



// UploadServerCertificateResponse
/** 
 * Contains the response to a successful <a>UploadServerCertificate</a> request. 
**/
export class UploadServerCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverCertificateMetadata?: ServerCertificateMetadata;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
