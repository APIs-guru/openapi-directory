import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalableTargetAction } from "./scalabletargetaction";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
/**
 * Represents a scheduled action.
**/
export declare class ScheduledAction extends SpeakeasyBase {
    creationTime: Date;
    endTime?: Date;
    resourceId: string;
    scalableDimension?: ScalableDimensionEnum;
    scalableTargetAction?: ScalableTargetAction;
    schedule: string;
    scheduledActionArn: string;
    scheduledActionName: string;
    serviceNamespace: ServiceNamespaceEnum;
    startTime?: Date;
    timezone?: string;
}
