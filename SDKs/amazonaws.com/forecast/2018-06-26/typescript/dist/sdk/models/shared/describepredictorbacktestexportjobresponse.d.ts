import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataDestination } from "./datadestination";
export declare class DescribePredictorBacktestExportJobResponse extends SpeakeasyBase {
    creationTime?: Date;
    destination?: DataDestination;
    lastModificationTime?: Date;
    message?: string;
    predictorArn?: string;
    predictorBacktestExportJobArn?: string;
    predictorBacktestExportJobName?: string;
    status?: string;
}
