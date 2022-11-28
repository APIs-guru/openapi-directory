import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { ScalingActivityStatusCodeEnum } from "./scalingactivitystatuscodeenum";



// ScalingActivity
/** 
 * Represents a scaling activity.
**/
export class ScalingActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityId" })
  activityId: string;

  @SpeakeasyMetadata({ data: "json, name=Cause" })
  cause: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode: ScalingActivityStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
