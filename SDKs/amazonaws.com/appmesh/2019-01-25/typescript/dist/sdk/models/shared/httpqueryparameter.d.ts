import { SpeakeasyBase } from "../../../internal/utils";
import { QueryParameterMatch } from "./queryparametermatch";
/**
 * An object that represents the query parameter in the request.
**/
export declare class HttpQueryParameter extends SpeakeasyBase {
    match?: QueryParameterMatch;
    name: string;
}
