import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorModelSummary } from "./detectormodelsummary";
export declare class ListDetectorModelsResponse extends SpeakeasyBase {
    detectorModelSummaries?: DetectorModelSummary[];
    nextToken?: string;
}
