import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorSummary } from "./detectorsummary";
export declare class ListDetectorsResponse extends SpeakeasyBase {
    detectorSummaries?: DetectorSummary[];
    nextToken?: string;
}
