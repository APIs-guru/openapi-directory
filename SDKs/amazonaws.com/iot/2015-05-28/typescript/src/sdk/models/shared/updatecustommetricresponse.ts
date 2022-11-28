import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomMetricTypeEnum } from "./custommetrictypeenum";



export class UpdateCustomMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=metricArn" })
  metricArn?: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricType" })
  metricType?: CustomMetricTypeEnum;
}
