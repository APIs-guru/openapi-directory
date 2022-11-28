import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendServerDescription
/** 
 * Information about the configuration of an EC2 instance.
**/
export class BackendServerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instancePort?: number;

  @SpeakeasyMetadata()
  policyNames?: string[];
}
