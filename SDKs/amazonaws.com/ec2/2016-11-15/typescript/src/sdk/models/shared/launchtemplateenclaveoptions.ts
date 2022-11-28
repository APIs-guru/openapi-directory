import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchTemplateEnclaveOptions
/** 
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
export class LaunchTemplateEnclaveOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: boolean;
}
