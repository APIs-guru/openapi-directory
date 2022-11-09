import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalableTargetAction } from "./scalabletargetaction";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";


export class PutScheduledActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ScalableTargetAction" })
  scalableTargetAction?: ScalableTargetAction;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=ScheduledActionName" })
  scheduledActionName: string;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}
