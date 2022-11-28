import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationType } from "./aggregationtype";
import { FleetMetricUnitEnum } from "./fleetmetricunitenum";
export declare class DescribeFleetMetricResponse extends SpeakeasyBase {
    aggregationField?: string;
    aggregationType?: AggregationType;
    creationDate?: Date;
    description?: string;
    indexName?: string;
    lastModifiedDate?: Date;
    metricArn?: string;
    metricName?: string;
    period?: number;
    queryString?: string;
    queryVersion?: string;
    unit?: FleetMetricUnitEnum;
    version?: number;
}
