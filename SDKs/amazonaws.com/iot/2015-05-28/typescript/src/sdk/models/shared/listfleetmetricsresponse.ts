import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FleetMetricNameAndArn } from "./fleetmetricnameandarn";


export class ListFleetMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleetMetrics", elemType: shared.FleetMetricNameAndArn })
  fleetMetrics?: FleetMetricNameAndArn[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
