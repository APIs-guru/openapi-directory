import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelVersionSummary } from "./detectormodelversionsummary";
export declare class ListDetectorModelVersionsResponse extends SpeakeasyBase {
    detectorModelVersionSummaries?: DetectorModelVersionSummary[];
    nextToken?: string;
}
