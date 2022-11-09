import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypeEnum } from "./typeenum";


// Grantee
/** 
 * Contains information about the grantee.
**/
export class Grantee extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=Type" })
  type: TypeEnum;

  @Metadata({ data: "json, name=URI" })
  uri?: string;
}
