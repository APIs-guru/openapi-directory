import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationWarning
/** 
 * Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.
**/
export class ValidationWarning extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string[];
}
