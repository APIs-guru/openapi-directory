import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PredictorSummary } from "./predictorsummary";
export declare class ListPredictorsResponse extends SpeakeasyBase {
    nextToken?: string;
    predictors?: PredictorSummary[];
}
