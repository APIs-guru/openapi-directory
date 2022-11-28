import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationWarning
/** 
 * Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.
**/
export class ValidationWarning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
