import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalableTargetAction } from "./scalabletargetaction";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class PutScheduledActionRequest extends SpeakeasyBase {
    endTime?: Date;
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    scalableTargetAction?: ScalableTargetAction;
    schedule?: string;
    scheduledActionName: string;
    serviceNamespace: ServiceNamespaceEnum;
    startTime?: Date;
    timezone?: string;
}
