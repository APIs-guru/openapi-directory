import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationError
/** 
 * Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
**/
export class ValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;
}
