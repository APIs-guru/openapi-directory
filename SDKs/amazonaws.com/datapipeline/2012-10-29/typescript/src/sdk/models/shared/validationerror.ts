import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationError
/** 
 * Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
**/
export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
