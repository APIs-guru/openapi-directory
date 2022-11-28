import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSummary } from "./experimentsummary";
export declare class ListExperimentsResponse extends SpeakeasyBase {
    experiments?: ExperimentSummary[];
    nextToken?: string;
}
