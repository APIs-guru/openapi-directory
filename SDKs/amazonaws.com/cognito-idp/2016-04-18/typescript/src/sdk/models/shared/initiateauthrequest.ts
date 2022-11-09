import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AuthFlowTypeEnum } from "./authflowtypeenum";
import { UserContextDataType } from "./usercontextdatatype";


// InitiateAuthRequest
/** 
 * Initiates the authentication request.
**/
export class InitiateAuthRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @Metadata({ data: "json, name=AuthFlow" })
  authFlow: AuthFlowTypeEnum;

  @Metadata({ data: "json, name=AuthParameters" })
  authParameters?: Map<string, string>;

  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;
}
