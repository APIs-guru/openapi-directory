import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { EbsConfiguration } from "./ebsconfiguration";



// InstanceTypeConfig
/** 
 * <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceTypeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=BidPriceAsPercentageOfOnDemandPrice" })
  bidPriceAsPercentageOfOnDemandPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsConfiguration" })
  ebsConfiguration?: EbsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=WeightedCapacity" })
  weightedCapacity?: number;
}
