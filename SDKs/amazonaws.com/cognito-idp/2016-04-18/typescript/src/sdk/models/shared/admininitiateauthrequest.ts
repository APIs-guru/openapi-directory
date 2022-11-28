import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AuthFlowTypeEnum } from "./authflowtypeenum";
import { ContextDataType } from "./contextdatatype";



// AdminInitiateAuthRequest
/** 
 * Initiates the authorization request, as an administrator.
**/
export class AdminInitiateAuthRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=ContextData" })
  contextData?: ContextDataType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
