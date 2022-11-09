import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityDescription
/** 
 * A description of the identity.
**/
export class IdentityDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=Logins" })
  logins?: string[];
}
