import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpParameters
/** 
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
**/
export class HttpParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=HeaderParameters" })
  headerParameters?: Map<string, string>;

  @Metadata({ data: "json, name=PathParameterValues" })
  pathParameterValues?: string[];

  @Metadata({ data: "json, name=QueryStringParameters" })
  queryStringParameters?: Map<string, string>;
}
