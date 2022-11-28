import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetMetricNameAndArn } from "./fleetmetricnameandarn";



export class ListFleetMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fleetMetrics", elemType: FleetMetricNameAndArn })
  fleetMetrics?: FleetMetricNameAndArn[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
