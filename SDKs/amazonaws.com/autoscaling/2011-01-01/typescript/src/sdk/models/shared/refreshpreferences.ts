import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefreshPreferences
/** 
 * Describes the preferences for an instance refresh.
**/
export class RefreshPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkpointDelay?: number;

  @SpeakeasyMetadata()
  checkpointPercentages?: number[];

  @SpeakeasyMetadata()
  instanceWarmup?: number;

  @SpeakeasyMetadata()
  minHealthyPercentage?: number;

  @SpeakeasyMetadata()
  skipMatching?: boolean;
}
