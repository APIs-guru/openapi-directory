import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";



export class ValidateSecurityProfileBehaviorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}
