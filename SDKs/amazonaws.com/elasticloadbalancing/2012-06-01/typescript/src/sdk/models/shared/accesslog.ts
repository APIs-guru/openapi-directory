import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessLog
/** 
 * Information about the <code>AccessLog</code> attribute.
**/
export class AccessLog extends SpeakeasyBase {
  @SpeakeasyMetadata()
  emitInterval?: number;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  s3BucketName?: string;

  @SpeakeasyMetadata()
  s3BucketPrefix?: string;
}
