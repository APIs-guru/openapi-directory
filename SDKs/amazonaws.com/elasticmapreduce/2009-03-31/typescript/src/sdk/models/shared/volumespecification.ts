import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeSpecification
/** 
 * EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
**/
export class VolumeSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=SizeInGB" })
  sizeInGb: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType: string;
}
