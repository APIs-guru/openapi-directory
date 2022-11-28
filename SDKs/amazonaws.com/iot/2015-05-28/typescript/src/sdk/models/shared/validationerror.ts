import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationError
/** 
 * Information about an error found in a behavior specification.
**/
export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
