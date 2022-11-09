import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";
import { EbsConfiguration } from "./ebsconfiguration";


// InstanceTypeConfig
/** 
 * <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceTypeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @Metadata({ data: "json, name=BidPriceAsPercentageOfOnDemandPrice" })
  bidPriceAsPercentageOfOnDemandPrice?: number;

  @Metadata({ data: "json, name=Configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @Metadata({ data: "json, name=EbsConfiguration" })
  ebsConfiguration?: EbsConfiguration;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=WeightedCapacity" })
  weightedCapacity?: number;
}
