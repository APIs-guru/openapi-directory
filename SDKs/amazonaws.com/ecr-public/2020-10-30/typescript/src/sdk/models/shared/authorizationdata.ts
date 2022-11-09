import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizationData
/** 
 * An authorization token data object that corresponds to a public registry.
**/
export class AuthorizationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationToken" })
  authorizationToken?: string;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;
}
