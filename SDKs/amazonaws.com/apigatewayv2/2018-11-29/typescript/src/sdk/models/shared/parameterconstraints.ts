import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterConstraints
/** 
 * Validation constraints imposed on parameters of a request (path, query string, headers).
**/
export class ParameterConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=Required" })
  required?: boolean;
}
