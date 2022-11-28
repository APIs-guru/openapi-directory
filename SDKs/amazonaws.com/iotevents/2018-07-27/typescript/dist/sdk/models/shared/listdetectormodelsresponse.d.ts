import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelSummary } from "./detectormodelsummary";
export declare class ListDetectorModelsResponse extends SpeakeasyBase {
    detectorModelSummaries?: DetectorModelSummary[];
    nextToken?: string;
}
