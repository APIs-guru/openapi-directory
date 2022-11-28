import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastDataTypeEnum } from "./forecastdatatypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";



export class GetScalingPlanResourceForecastDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ForecastDataType" })
  forecastDataType: ForecastDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
