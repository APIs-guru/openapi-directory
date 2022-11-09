import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { UserContextDataType } from "./usercontextdatatype";


// ResendConfirmationCodeRequest
/** 
 * Represents the request to resend the confirmation code.
**/
export class ResendConfirmationCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=SecretHash" })
  secretHash?: string;

  @Metadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
