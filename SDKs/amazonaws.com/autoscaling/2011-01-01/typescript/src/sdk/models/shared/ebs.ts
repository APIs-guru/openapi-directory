import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ebs
/** 
 * Describes information used to set up an Amazon EBS volume specified in a block device mapping.
**/
export class Ebs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  throughput?: number;

  @SpeakeasyMetadata()
  volumeSize?: number;

  @SpeakeasyMetadata()
  volumeType?: string;
}
