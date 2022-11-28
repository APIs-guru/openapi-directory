import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserPoolClientDescription
/** 
 * The description of the user pool client.
**/
export class UserPoolClientDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientName" })
  clientName?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
