import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionBodyParameter } from "./connectionbodyparameter";
import { ConnectionHeaderParameter } from "./connectionheaderparameter";
import { ConnectionQueryStringParameter } from "./connectionquerystringparameter";



// ConnectionHttpParameters
/** 
 * Contains additional parameters for the connection.
**/
export class ConnectionHttpParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BodyParameters", elemType: ConnectionBodyParameter })
  bodyParameters?: ConnectionBodyParameter[];

  @SpeakeasyMetadata({ data: "json, name=HeaderParameters", elemType: ConnectionHeaderParameter })
  headerParameters?: ConnectionHeaderParameter[];

  @SpeakeasyMetadata({ data: "json, name=QueryStringParameters", elemType: ConnectionQueryStringParameter })
  queryStringParameters?: ConnectionQueryStringParameter[];
}
