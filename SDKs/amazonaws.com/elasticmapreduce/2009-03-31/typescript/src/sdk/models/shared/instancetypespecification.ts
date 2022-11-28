import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { EbsBlockDevice } from "./ebsblockdevice";



// InstanceTypeSpecification
/** 
 * <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceTypeSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=BidPriceAsPercentageOfOnDemandPrice" })
  bidPriceAsPercentageOfOnDemandPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsBlockDevices", elemType: EbsBlockDevice })
  ebsBlockDevices?: EbsBlockDevice[];

  @SpeakeasyMetadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=WeightedCapacity" })
  weightedCapacity?: number;
}
