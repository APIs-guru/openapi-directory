import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationMessage } from "./validationmessage";



// ConfigurationSettingsValidationMessages
/** 
 * Provides a list of validation messages.
**/
export class ConfigurationSettingsValidationMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ValidationMessage })
  messages?: ValidationMessage[];
}
