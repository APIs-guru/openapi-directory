import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatusEvent } from "./instancestatusevent";
import { InstanceState } from "./instancestate";
import { InstanceStatusSummary } from "./instancestatussummary";



// InstanceStatus
/** 
 * Describes the status of an instance.
**/
export class InstanceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata({ elemType: InstanceStatusEvent })
  events?: InstanceStatusEvent[];

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceState?: InstanceState;

  @SpeakeasyMetadata()
  instanceStatus?: InstanceStatusSummary;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  systemStatus?: InstanceStatusSummary;
}
