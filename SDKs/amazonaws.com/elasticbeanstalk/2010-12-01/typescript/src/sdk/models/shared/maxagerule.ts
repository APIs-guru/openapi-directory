import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaxAgeRule
/** 
 * A lifecycle rule that deletes application versions after the specified number of days.
**/
export class MaxAgeRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deleteSourceFromS3?: boolean;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  maxAgeInDays?: number;
}
