import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastDataTypeEnum } from "./forecastdatatypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
export declare class GetScalingPlanResourceForecastDataRequest extends SpeakeasyBase {
    endTime: Date;
    forecastDataType: ForecastDataTypeEnum;
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    scalingPlanName: string;
    scalingPlanVersion: number;
    serviceNamespace: ServiceNamespaceEnum;
    startTime: Date;
}
