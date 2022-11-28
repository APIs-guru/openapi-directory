import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedUpdateAction
/** 
 * Update action that has failed to be processed for the corresponding apply/stop request
**/
export class UnprocessedUpdateAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  errorMessage?: string;

  @SpeakeasyMetadata()
  errorType?: string;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  serviceUpdateName?: string;
}
