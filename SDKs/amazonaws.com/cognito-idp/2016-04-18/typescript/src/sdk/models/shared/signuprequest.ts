import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { AttributeType } from "./attributetype";
import { UserContextDataType } from "./usercontextdatatype";
import { AttributeType } from "./attributetype";


// SignUpRequest
/** 
 * Represents the request to register a user.
**/
export class SignUpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=SecretHash" })
  secretHash?: string;

  @Metadata({ data: "json, name=UserAttributes", elemType: shared.AttributeType })
  userAttributes?: AttributeType[];

  @Metadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;

  @Metadata({ data: "json, name=Username" })
  username: string;

  @Metadata({ data: "json, name=ValidationData", elemType: shared.AttributeType })
  validationData?: AttributeType[];
}
