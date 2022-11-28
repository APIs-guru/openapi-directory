import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpHeader } from "./httpheader";



// ContextDataType
/** 
 * Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
**/
export class ContextDataType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncodedData" })
  encodedData?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpHeaders", elemType: HttpHeader })
  httpHeaders: HttpHeader[];

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;

  @SpeakeasyMetadata({ data: "json, name=ServerPath" })
  serverPath: string;
}
