import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthStatusEnum } from "./instancehealthstatusenum";



// ActiveInstance
/** 
 * Describes a running instance in a Spot Fleet.
**/
export class ActiveInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceHealth?: InstanceHealthStatusEnum;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  spotInstanceRequestId?: string;
}
