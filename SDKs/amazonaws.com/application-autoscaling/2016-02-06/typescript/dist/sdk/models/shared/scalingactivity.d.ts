import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { ScalingActivityStatusCodeEnum } from "./scalingactivitystatuscodeenum";
/**
 * Represents a scaling activity.
**/
export declare class ScalingActivity extends SpeakeasyBase {
    activityId: string;
    cause: string;
    description: string;
    details?: string;
    endTime?: Date;
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
    startTime: Date;
    statusCode: ScalingActivityStatusCodeEnum;
    statusMessage?: string;
}
