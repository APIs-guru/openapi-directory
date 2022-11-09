import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { ScalingActivityStatusCodeEnum } from "./scalingactivitystatuscodeenum";


// ScalingActivity
/** 
 * Represents a scaling activity.
**/
export class ScalingActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityId" })
  activityId: string;

  @Metadata({ data: "json, name=Cause" })
  cause: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Details" })
  details?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode: ScalingActivityStatusCodeEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
