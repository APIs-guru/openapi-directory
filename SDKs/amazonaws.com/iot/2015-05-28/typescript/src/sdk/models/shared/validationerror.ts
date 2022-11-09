import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationError
/** 
 * Information about an error found in a behavior specification.
**/
export class ValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
