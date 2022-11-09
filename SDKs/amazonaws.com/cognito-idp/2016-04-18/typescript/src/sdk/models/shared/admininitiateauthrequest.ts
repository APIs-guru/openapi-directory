import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AuthFlowTypeEnum } from "./authflowtypeenum";
import { ContextDataType } from "./contextdatatype";


// AdminInitiateAuthRequest
/** 
 * Initiates the authorization request, as an administrator.
**/
export class AdminInitiateAuthRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=ContextData" })
  contextData?: ContextDataType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
