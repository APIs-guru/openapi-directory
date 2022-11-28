import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizationData
/** 
 * An authorization token data object that corresponds to a public registry.
**/
export class AuthorizationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationToken" })
  authorizationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;
}
