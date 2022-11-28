import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientCertificate
/** 
 * <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
**/
export class ClientCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientCertificateId" })
  clientCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pemEncodedCertificate" })
  pemEncodedCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
