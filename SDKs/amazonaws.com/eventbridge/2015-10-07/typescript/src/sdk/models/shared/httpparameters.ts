import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpParameters
/** 
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
**/
export class HttpParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HeaderParameters" })
  headerParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PathParameterValues" })
  pathParameterValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=QueryStringParameters" })
  queryStringParameters?: Map<string, string>;
}
