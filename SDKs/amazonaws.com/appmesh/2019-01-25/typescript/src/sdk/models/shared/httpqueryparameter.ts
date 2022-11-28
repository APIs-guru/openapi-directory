import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryParameterMatch } from "./queryparametermatch";



// HttpQueryParameter
/** 
 * An object that represents the query parameter in the request.
**/
export class HttpQueryParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: QueryParameterMatch;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
