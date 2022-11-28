import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserBucketDetails } from "./userbucketdetails";



// SnapshotTaskDetail
/** 
 * Details about the import snapshot task.
**/
export class SnapshotTaskDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  diskImageSize?: number;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  format?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

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
