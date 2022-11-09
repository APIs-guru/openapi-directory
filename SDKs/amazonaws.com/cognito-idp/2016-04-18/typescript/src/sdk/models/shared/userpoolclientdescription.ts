import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserPoolClientDescription
/** 
 * The description of the user pool client.
**/
export class UserPoolClientDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ClientName" })
  clientName?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
