import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";



export class CreatePredictorBacktestExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: DataDestination;

  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobName" })
  predictorBacktestExportJobName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
