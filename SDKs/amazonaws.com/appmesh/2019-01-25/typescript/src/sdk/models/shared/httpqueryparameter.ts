import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryParameterMatch } from "./queryparametermatch";


// HttpQueryParameter
/** 
 * An object that represents the query parameter in the request.
**/
export class HttpQueryParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=match" })
  match?: QueryParameterMatch;

  @Metadata({ data: "json, name=name" })
  name: string;
}
