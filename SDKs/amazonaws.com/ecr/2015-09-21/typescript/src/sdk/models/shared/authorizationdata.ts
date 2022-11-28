import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizationData
/** 
 * An object representing authorization data for an Amazon ECR registry.
**/
export class AuthorizationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationToken" })
  authorizationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=proxyEndpoint" })
  proxyEndpoint?: string;
}
