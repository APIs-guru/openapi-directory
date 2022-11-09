import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationType } from "./aggregationtype";
import { FleetMetricUnitEnum } from "./fleetmetricunitenum";


export class DescribeFleetMetricResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationField" })
  aggregationField?: string;

  @Metadata({ data: "json, name=aggregationType" })
  aggregationType?: AggregationType;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=period" })
  period?: number;

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: FleetMetricUnitEnum;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
