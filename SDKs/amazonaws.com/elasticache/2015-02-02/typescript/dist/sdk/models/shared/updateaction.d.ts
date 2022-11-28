import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeUpdateStatus } from "./cachenodeupdatestatus";
import { NodeGroupUpdateStatus } from "./nodegroupupdatestatus";
import { ServiceUpdateSeverityEnum } from "./serviceupdateseverityenum";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";
import { SlaMetEnum } from "./slametenum";
import { UpdateActionStatusEnum } from "./updateactionstatusenum";
/**
 * The status of the service update for a specific replication group
**/
export declare class UpdateAction extends SpeakeasyBase {
    cacheClusterId?: string;
    cacheNodeUpdateStatus?: CacheNodeUpdateStatus[];
    engine?: string;
    estimatedUpdateTime?: string;
    nodeGroupUpdateStatus?: NodeGroupUpdateStatus[];
    nodesUpdated?: string;
    replicationGroupId?: string;
    serviceUpdateName?: string;
    serviceUpdateRecommendedApplyByDate?: Date;
    serviceUpdateReleaseDate?: Date;
    serviceUpdateSeverity?: ServiceUpdateSeverityEnum;
    serviceUpdateStatus?: ServiceUpdateStatusEnum;
    serviceUpdateType?: ServiceUpdateTypeEnum;
    slaMet?: SlaMetEnum;
    updateActionAvailableDate?: Date;
    updateActionStatus?: UpdateActionStatusEnum;
    updateActionStatusModifiedDate?: Date;
}
