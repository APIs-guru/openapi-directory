import { SpeakeasyBase } from "../../../internal/utils";
import { LogDestinationTypeEnum } from "./logdestinationtypeenum";
import { Tag } from "./tag";
import { TrafficTypeEnum } from "./traffictypeenum";
/**
 * Describes a flow log.
**/
export declare class FlowLog extends SpeakeasyBase {
    creationTime?: Date;
    deliverLogsErrorMessage?: string;
    deliverLogsPermissionArn?: string;
    deliverLogsStatus?: string;
    flowLogId?: string;
    flowLogStatus?: string;
    logDestination?: string;
    logDestinationType?: LogDestinationTypeEnum;
    logFormat?: string;
    logGroupName?: string;
    maxAggregationInterval?: number;
    resourceId?: string;
    tags?: Tag[];
    trafficType?: TrafficTypeEnum;
}
