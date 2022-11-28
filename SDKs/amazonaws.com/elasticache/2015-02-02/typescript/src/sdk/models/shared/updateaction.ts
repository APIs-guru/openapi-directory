import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeUpdateStatus } from "./cachenodeupdatestatus";
import { NodeGroupUpdateStatus } from "./nodegroupupdatestatus";
import { ServiceUpdateSeverityEnum } from "./serviceupdateseverityenum";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";
import { SlaMetEnum } from "./slametenum";
import { UpdateActionStatusEnum } from "./updateactionstatusenum";



// UpdateAction
/** 
 * The status of the service update for a specific replication group
**/
export class UpdateAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata({ elemType: CacheNodeUpdateStatus })
  cacheNodeUpdateStatus?: CacheNodeUpdateStatus[];

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  estimatedUpdateTime?: string;

  @SpeakeasyMetadata({ elemType: NodeGroupUpdateStatus })
  nodeGroupUpdateStatus?: NodeGroupUpdateStatus[];

  @SpeakeasyMetadata()
  nodesUpdated?: string;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  serviceUpdateName?: string;

  @SpeakeasyMetadata()
  serviceUpdateRecommendedApplyByDate?: Date;

  @SpeakeasyMetadata()
  serviceUpdateReleaseDate?: Date;

  @SpeakeasyMetadata()
  serviceUpdateSeverity?: ServiceUpdateSeverityEnum;

  @SpeakeasyMetadata()
  serviceUpdateStatus?: ServiceUpdateStatusEnum;

  @SpeakeasyMetadata()
  serviceUpdateType?: ServiceUpdateTypeEnum;

  @SpeakeasyMetadata()
  slaMet?: SlaMetEnum;

  @SpeakeasyMetadata()
  updateActionAvailableDate?: Date;

  @SpeakeasyMetadata()
  updateActionStatus?: UpdateActionStatusEnum;

  @SpeakeasyMetadata()
  updateActionStatusModifiedDate?: Date;
}
