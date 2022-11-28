import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetCapacityReservationUsageStrategyEnum } from "./fleetcapacityreservationusagestrategyenum";



// CapacityReservationOptions
/** 
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.</p> <note> <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p> </note> <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
**/
export class CapacityReservationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  usageStrategy?: FleetCapacityReservationUsageStrategyEnum;
}
