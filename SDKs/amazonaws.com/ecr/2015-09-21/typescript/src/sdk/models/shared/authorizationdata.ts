import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizationData
/** 
 * An object representing authorization data for an Amazon ECR registry.
**/
export class AuthorizationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationToken" })
  authorizationToken?: string;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=proxyEndpoint" })
  proxyEndpoint?: string;
}
