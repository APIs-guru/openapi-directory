import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Resource capacity settings. Fleet capacity is measured in EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.</p> <p>EC2 instance counts are part of <a>FleetCapacity</a>.</p>
**/
export declare class Ec2InstanceCounts extends SpeakeasyBase {
    active?: number;
    desired?: number;
    idle?: number;
    maximum?: number;
    minimum?: number;
    pending?: number;
    terminating?: number;
}
