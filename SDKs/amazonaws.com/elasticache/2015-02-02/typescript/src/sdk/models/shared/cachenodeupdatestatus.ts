import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeUpdateInitiatedByEnum } from "./nodeupdateinitiatedbyenum";
import { NodeUpdateStatusEnum } from "./nodeupdatestatusenum";



// CacheNodeUpdateStatus
/** 
 * The status of the service update on the cache node
**/
export class CacheNodeUpdateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheNodeId?: string;

  @SpeakeasyMetadata()
  nodeDeletionDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateEndDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateInitiatedBy?: NodeUpdateInitiatedByEnum;

  @SpeakeasyMetadata()
  nodeUpdateInitiatedDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateStartDate?: Date;

  @SpeakeasyMetadata()
  nodeUpdateStatus?: NodeUpdateStatusEnum;

  @SpeakeasyMetadata()
  nodeUpdateStatusModifiedDate?: Date;
}
