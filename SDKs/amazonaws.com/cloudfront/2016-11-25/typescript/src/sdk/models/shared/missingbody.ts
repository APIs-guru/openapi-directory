import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MissingBody
/** 
 * This operation requires a body. Ensure that the body is present and the Content-Type header is set.
**/
export class MissingBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
