import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";



export class DescribePredictorBacktestExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: DataDestination;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobArn" })
  predictorBacktestExportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobName" })
  predictorBacktestExportJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
