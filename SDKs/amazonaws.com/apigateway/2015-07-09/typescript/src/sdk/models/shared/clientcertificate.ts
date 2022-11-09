import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClientCertificate
/** 
 * <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
**/
export class ClientCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientCertificateId" })
  clientCertificateId?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=pemEncodedCertificate" })
  pemEncodedCertificate?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
