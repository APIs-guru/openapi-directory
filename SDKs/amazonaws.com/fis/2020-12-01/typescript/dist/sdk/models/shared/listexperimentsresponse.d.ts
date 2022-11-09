import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentSummary } from "./experimentsummary";
export declare class ListExperimentsResponse extends SpeakeasyBase {
    experiments?: ExperimentSummary[];
    nextToken?: string;
}
