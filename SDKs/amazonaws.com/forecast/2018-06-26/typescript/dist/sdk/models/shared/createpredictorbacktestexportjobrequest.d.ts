import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";
export declare class CreatePredictorBacktestExportJobRequest extends SpeakeasyBase {
    destination: DataDestination;
    predictorArn: string;
    predictorBacktestExportJobName: string;
    tags?: Tag[];
}
