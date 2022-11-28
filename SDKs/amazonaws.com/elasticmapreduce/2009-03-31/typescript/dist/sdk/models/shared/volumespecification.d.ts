import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
**/
export declare class VolumeSpecification extends SpeakeasyBase {
    iops?: number;
    sizeInGb: number;
    volumeType: string;
}
