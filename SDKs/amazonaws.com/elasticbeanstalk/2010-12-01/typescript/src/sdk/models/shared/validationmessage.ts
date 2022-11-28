import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationSeverityEnum } from "./validationseverityenum";



// ValidationMessage
/** 
 * An error or warning for a desired configuration option value.
**/
export class ValidationMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  namespace?: string;

  @SpeakeasyMetadata()
  optionName?: string;

  @SpeakeasyMetadata()
  severity?: ValidationSeverityEnum;
}
