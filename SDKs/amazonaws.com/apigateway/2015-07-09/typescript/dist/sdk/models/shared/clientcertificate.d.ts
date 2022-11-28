import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
**/
export declare class ClientCertificate extends SpeakeasyBase {
    clientCertificateId?: string;
    createdDate?: Date;
    description?: string;
    expirationDate?: Date;
    pemEncodedCertificate?: string;
    tags?: Map<string, string>;
}
