import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionStatusEnum } from "./updateactionstatusenum";



// ProcessedUpdateAction
/** 
 * Update action that has been processed for the corresponding apply/stop request
**/
export class ProcessedUpdateAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  serviceUpdateName?: string;

  @SpeakeasyMetadata()
  updateActionStatus?: UpdateActionStatusEnum;
}
