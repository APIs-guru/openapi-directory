import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidArgument
/** 
 * The argument is invalid.
**/
export class InvalidArgument extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
