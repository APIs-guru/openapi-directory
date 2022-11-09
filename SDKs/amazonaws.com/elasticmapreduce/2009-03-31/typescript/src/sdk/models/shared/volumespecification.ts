import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VolumeSpecification
/** 
 * EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
**/
export class VolumeSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=SizeInGB" })
  sizeInGb: number;

  @Metadata({ data: "json, name=VolumeType" })
  volumeType: string;
}
