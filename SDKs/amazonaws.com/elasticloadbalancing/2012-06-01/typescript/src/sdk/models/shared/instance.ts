import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Instance
/** 
 * The ID of an EC2 instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;
}
