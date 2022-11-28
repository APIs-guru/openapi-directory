import { SpeakeasyBase } from "../../../internal/utils";
import { FleetMetricNameAndArn } from "./fleetmetricnameandarn";
export declare class ListFleetMetricsResponse extends SpeakeasyBase {
    fleetMetrics?: FleetMetricNameAndArn[];
    nextToken?: string;
}
