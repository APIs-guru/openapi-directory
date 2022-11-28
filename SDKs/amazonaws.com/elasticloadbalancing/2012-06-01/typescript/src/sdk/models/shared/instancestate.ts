import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceState
/** 
 * Information about the state of an EC2 instance.
**/
export class InstanceState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  reasonCode?: string;

  @SpeakeasyMetadata()
  state?: string;
}
