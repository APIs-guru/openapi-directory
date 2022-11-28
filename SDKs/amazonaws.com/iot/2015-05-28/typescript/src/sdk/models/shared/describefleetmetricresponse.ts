import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationType } from "./aggregationtype";
import { FleetMetricUnitEnum } from "./fleetmetricunitenum";



export class DescribeFleetMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationField" })
  aggregationField?: string;

  @SpeakeasyMetadata({ data: "json, name=aggregationType" })
  aggregationType?: AggregationType;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=indexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: FleetMetricUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
