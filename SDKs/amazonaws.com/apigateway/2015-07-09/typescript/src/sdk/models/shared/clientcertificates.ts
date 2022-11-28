import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificate } from "./clientcertificate";



// ClientCertificates
/** 
 * <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
**/
export class ClientCertificates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ClientCertificate })
  items?: ClientCertificate[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;
}
