import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypeEnum } from "./typeenum";



// Grantee
/** 
 * Contains information about the grantee.
**/
export class Grantee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: TypeEnum;

  @SpeakeasyMetadata({ data: "json, name=URI" })
  uri?: string;
}
