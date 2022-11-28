import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";



// ForgotPasswordRequest
/** 
 * Represents the request to reset a user's password.
**/
export class ForgotPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SecretHash" })
  secretHash?: string;

  @SpeakeasyMetadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
