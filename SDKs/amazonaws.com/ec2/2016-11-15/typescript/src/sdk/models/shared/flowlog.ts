import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogDestinationTypeEnum } from "./logdestinationtypeenum";
import { Tag } from "./tag";
import { TrafficTypeEnum } from "./traffictypeenum";



// FlowLog
/** 
 * Describes a flow log.
**/
export class FlowLog extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  deliverLogsErrorMessage?: string;

  @SpeakeasyMetadata()
  deliverLogsPermissionArn?: string;

  @SpeakeasyMetadata()
  deliverLogsStatus?: string;

  @SpeakeasyMetadata()
  flowLogId?: string;

  @SpeakeasyMetadata()
  flowLogStatus?: string;

  @SpeakeasyMetadata()
  logDestination?: string;

  @SpeakeasyMetadata()
  logDestinationType?: LogDestinationTypeEnum;

  @SpeakeasyMetadata()
  logFormat?: string;

  @SpeakeasyMetadata()
  logGroupName?: string;

  @SpeakeasyMetadata()
  maxAggregationInterval?: number;

  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  trafficType?: TrafficTypeEnum;
}
