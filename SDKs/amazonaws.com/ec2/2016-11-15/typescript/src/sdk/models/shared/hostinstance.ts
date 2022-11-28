import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HostInstance
/** 
 * Describes an instance running on a Dedicated Host.
**/
export class HostInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  ownerId?: string;
}
