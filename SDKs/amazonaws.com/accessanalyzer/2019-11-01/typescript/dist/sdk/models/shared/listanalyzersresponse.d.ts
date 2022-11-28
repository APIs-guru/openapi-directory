import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerSummary } from "./analyzersummary";
/**
 * The response to the request.
**/
export declare class ListAnalyzersResponse extends SpeakeasyBase {
    analyzers: AnalyzerSummary[];
    nextToken?: string;
}
