import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LastError
/** 
 * The last error that occurred for a VPC endpoint.
**/
export class LastError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
