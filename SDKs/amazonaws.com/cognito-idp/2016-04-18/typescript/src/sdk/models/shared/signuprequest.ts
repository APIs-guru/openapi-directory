import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AttributeType } from "./attributetype";
import { UserContextDataType } from "./usercontextdatatype";



// SignUpRequest
/** 
 * Represents the request to register a user.
**/
export class SignUpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=SecretHash" })
  secretHash?: string;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeType })
  userAttributes?: AttributeType[];

  @SpeakeasyMetadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationData", elemType: AttributeType })
  validationData?: AttributeType[];
}
