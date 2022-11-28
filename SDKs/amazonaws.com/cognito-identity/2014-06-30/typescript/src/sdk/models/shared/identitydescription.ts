import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityDescription
/** 
 * A description of the identity.
**/
export class IdentityDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Logins" })
  logins?: string[];
}
