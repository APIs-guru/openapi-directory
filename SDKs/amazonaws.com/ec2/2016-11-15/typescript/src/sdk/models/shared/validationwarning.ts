import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";



// ValidationWarning
/** 
 * The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.
**/
export class ValidationWarning extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ValidationError })
  errors?: ValidationError[];
}
