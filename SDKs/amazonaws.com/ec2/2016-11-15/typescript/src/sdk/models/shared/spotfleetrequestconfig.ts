import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityStatusEnum } from "./activitystatusenum";
import { SpotFleetRequestConfigData } from "./spotfleetrequestconfigdata";
import { BatchStateEnum } from "./batchstateenum";
import { Tag } from "./tag";



// SpotFleetRequestConfig
/** 
 * Describes a Spot Fleet request.
**/
export class SpotFleetRequestConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityStatus?: ActivityStatusEnum;

  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata()
  spotFleetRequestConfig?: SpotFleetRequestConfigData;

  @SpeakeasyMetadata()
  spotFleetRequestId?: string;

  @SpeakeasyMetadata()
  spotFleetRequestState?: BatchStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
