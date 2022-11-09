import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomMetricTypeEnum } from "./custommetrictypeenum";


export class DescribeCustomMetricResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=metricType" })
  metricType?: CustomMetricTypeEnum;
}
