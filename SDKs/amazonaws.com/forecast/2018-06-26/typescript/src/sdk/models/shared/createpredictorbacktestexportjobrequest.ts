import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";


export class CreatePredictorBacktestExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination: DataDestination;

  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn: string;

  @Metadata({ data: "json, name=PredictorBacktestExportJobName" })
  predictorBacktestExportJobName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
