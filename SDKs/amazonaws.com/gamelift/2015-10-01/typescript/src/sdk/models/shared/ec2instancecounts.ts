import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ec2InstanceCounts
/** 
 * <p>Resource capacity settings. Fleet capacity is measured in EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.</p> <p>EC2 instance counts are part of <a>FleetCapacity</a>.</p>
**/
export class Ec2InstanceCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACTIVE" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=DESIRED" })
  desired?: number;

  @SpeakeasyMetadata({ data: "json, name=IDLE" })
  idle?: number;

  @SpeakeasyMetadata({ data: "json, name=MAXIMUM" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=MINIMUM" })
  minimum?: number;

  @SpeakeasyMetadata({ data: "json, name=PENDING" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=TERMINATING" })
  terminating?: number;
}
