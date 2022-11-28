import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";



// ResendConfirmationCodeRequest
/** 
 * Represents the request to resend the confirmation code.
**/
export class ResendConfirmationCodeRequest extends SpeakeasyBase {
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
