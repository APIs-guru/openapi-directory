import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalableTargetAction } from "./scalabletargetaction";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";



// ScheduledAction
/** 
 * Represents a scheduled action.
**/
export class ScheduledAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableDimension" })
  scalableDimension?: ScalableDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=ScalableTargetAction" })
  scalableTargetAction?: ScalableTargetAction;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledActionARN" })
  scheduledActionArn: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledActionName" })
  scheduledActionName: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}
