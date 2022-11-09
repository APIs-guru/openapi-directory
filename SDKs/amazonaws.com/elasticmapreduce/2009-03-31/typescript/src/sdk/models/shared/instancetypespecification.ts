import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";
import { EbsBlockDevice } from "./ebsblockdevice";


// InstanceTypeSpecification
/** 
 * <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceTypeSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @Metadata({ data: "json, name=BidPriceAsPercentageOfOnDemandPrice" })
  bidPriceAsPercentageOfOnDemandPrice?: number;

  @Metadata({ data: "json, name=Configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @Metadata({ data: "json, name=EbsBlockDevices", elemType: shared.EbsBlockDevice })
  ebsBlockDevices?: EbsBlockDevice[];

  @Metadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=WeightedCapacity" })
  weightedCapacity?: number;
}
