import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";



export class CreateDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;
}
