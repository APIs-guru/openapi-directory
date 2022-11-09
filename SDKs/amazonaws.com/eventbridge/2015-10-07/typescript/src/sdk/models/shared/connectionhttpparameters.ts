import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionBodyParameter } from "./connectionbodyparameter";
import { ConnectionHeaderParameter } from "./connectionheaderparameter";
import { ConnectionQueryStringParameter } from "./connectionquerystringparameter";


// ConnectionHttpParameters
/** 
 * Contains additional parameters for the connection.
**/
export class ConnectionHttpParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=BodyParameters", elemType: shared.ConnectionBodyParameter })
  bodyParameters?: ConnectionBodyParameter[];

  @Metadata({ data: "json, name=HeaderParameters", elemType: shared.ConnectionHeaderParameter })
  headerParameters?: ConnectionHeaderParameter[];

  @Metadata({ data: "json, name=QueryStringParameters", elemType: shared.ConnectionQueryStringParameter })
  queryStringParameters?: ConnectionQueryStringParameter[];
}
