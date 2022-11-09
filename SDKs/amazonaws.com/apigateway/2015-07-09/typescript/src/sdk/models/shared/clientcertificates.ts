import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientCertificate } from "./clientcertificate";


// ClientCertificates
/** 
 * <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
**/
export class ClientCertificates extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ClientCertificate })
  items?: ClientCertificate[];

  @Metadata({ data: "json, name=position" })
  position?: string;
}
