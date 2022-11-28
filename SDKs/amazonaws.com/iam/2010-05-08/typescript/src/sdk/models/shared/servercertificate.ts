import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateMetadata } from "./servercertificatemetadata";
import { Tag } from "./tag";



// ServerCertificate
/** 
 * <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
**/
export class ServerCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateBody: string;

  @SpeakeasyMetadata()
  certificateChain?: string;

  @SpeakeasyMetadata()
  serverCertificateMetadata: ServerCertificateMetadata;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
