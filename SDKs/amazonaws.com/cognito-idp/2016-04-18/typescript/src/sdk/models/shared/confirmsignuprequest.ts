import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";



// ConfirmSignUpRequest
/** 
 * Represents the request to confirm registration of a user.
**/
export class ConfirmSignUpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ConfirmationCode" })
  confirmationCode: string;

  @SpeakeasyMetadata({ data: "json, name=ForceAliasCreation" })
  forceAliasCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SecretHash" })
  secretHash?: string;

  @SpeakeasyMetadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
