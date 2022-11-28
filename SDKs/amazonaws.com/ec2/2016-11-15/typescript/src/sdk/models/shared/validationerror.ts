import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationError
/** 
 * The error code and error message that is returned for a parameter or parameter combination that is not valid when a new launch template or new version of a launch template is created.
**/
export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
