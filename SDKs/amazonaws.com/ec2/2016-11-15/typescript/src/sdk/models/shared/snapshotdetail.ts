import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserBucketDetails } from "./userbucketdetails";



// SnapshotDetail
/** 
 * Describes the snapshot created from the imported disk.
**/
export class SnapshotDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  deviceName?: string;

  @SpeakeasyMetadata()
  diskImageSize?: number;

  @SpeakeasyMetadata()
  format?: string;

  @SpeakeasyMetadata()
  progress?: string;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata()
  url?: string;

  @SpeakeasyMetadata()
  userBucket?: UserBucketDetails;
}
