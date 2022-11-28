import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnclaveOptions
/** 
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
export class EnclaveOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: boolean;
}
