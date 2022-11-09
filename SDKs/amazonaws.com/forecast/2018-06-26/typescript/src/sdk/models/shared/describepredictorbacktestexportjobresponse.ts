import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataDestination } from "./datadestination";


export class DescribePredictorBacktestExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Destination" })
  destination?: DataDestination;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @Metadata({ data: "json, name=PredictorBacktestExportJobArn" })
  predictorBacktestExportJobArn?: string;

  @Metadata({ data: "json, name=PredictorBacktestExportJobName" })
  predictorBacktestExportJobName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
