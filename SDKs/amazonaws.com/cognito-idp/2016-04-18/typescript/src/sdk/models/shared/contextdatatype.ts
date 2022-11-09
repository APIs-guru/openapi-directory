import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpHeader } from "./httpheader";


// ContextDataType
/** 
 * Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
**/
export class ContextDataType extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncodedData" })
  encodedData?: string;

  @Metadata({ data: "json, name=HttpHeaders", elemType: shared.HttpHeader })
  httpHeaders: HttpHeader[];

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;

  @Metadata({ data: "json, name=ServerPath" })
  serverPath: string;
}
