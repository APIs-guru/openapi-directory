import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AuthFlowTypeEnum } from "./authflowtypeenum";
import { UserContextDataType } from "./usercontextdatatype";



// InitiateAuthRequest
/** 
 * Initiates the authentication request.
**/
export class InitiateAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @SpeakeasyMetadata({ data: "json, name=AuthFlow" })
  authFlow: AuthFlowTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AuthParameters" })
  authParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;
}
