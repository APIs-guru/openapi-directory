import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReputationOptions
/** 
 * Contains information about the reputation settings for a configuration set.
**/
export class ReputationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastFreshStart?: Date;

  @SpeakeasyMetadata()
  reputationMetricsEnabled?: boolean;

  @SpeakeasyMetadata()
  sendingEnabled?: boolean;
}
