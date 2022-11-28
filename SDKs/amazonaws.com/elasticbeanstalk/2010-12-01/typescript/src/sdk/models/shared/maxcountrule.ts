import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaxCountRule
/** 
 * A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
**/
export class MaxCountRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deleteSourceFromS3?: boolean;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  maxCount?: number;
}
