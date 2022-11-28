import { SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificate } from "./clientcertificate";
/**
 * <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
**/
export declare class ClientCertificates extends SpeakeasyBase {
    items?: ClientCertificate[];
    position?: string;
}
