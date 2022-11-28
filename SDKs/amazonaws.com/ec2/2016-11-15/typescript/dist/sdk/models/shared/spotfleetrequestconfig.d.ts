import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityStatusEnum } from "./activitystatusenum";
import { SpotFleetRequestConfigData } from "./spotfleetrequestconfigdata";
import { BatchStateEnum } from "./batchstateenum";
import { Tag } from "./tag";
/**
 * Describes a Spot Fleet request.
**/
export declare class SpotFleetRequestConfig extends SpeakeasyBase {
    activityStatus?: ActivityStatusEnum;
    createTime?: Date;
    spotFleetRequestConfig?: SpotFleetRequestConfigData;
    spotFleetRequestId?: string;
    spotFleetRequestState?: BatchStateEnum;
    tags?: Tag[];
}
