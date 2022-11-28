import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterConstraints
/** 
 * Validation constraints imposed on parameters of a request (path, query string, headers).
**/
export class ParameterConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Required" })
  required?: boolean;
}
