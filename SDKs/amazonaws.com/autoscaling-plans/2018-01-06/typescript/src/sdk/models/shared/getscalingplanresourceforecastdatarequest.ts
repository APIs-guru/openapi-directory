import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ForecastDataTypeEnum } from "./forecastdatatypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";


export class GetScalingPlanResourceForecastDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=ForecastDataType" })
  forecastDataType: ForecastDataTypeEnum;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @Metadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
