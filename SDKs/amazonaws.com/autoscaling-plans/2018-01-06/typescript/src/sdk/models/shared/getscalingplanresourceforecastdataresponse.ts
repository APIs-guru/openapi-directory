import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Datapoint } from "./datapoint";


export class GetScalingPlanResourceForecastDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Datapoints", elemType: shared.Datapoint })
  datapoints: Datapoint[];
}
