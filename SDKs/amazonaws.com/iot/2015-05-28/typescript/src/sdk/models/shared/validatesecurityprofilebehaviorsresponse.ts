import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationError } from "./validationerror";


export class ValidateSecurityProfileBehaviorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=valid" })
  valid?: boolean;

  @Metadata({ data: "json, name=validationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];
}
