import { SpeakeasyBase } from "../../../internal/utils";
import { FindingSummary } from "./findingsummary";
/**
 * The response to the request.
**/
export declare class ListFindingsResponse extends SpeakeasyBase {
    findings: FindingSummary[];
    nextToken?: string;
}
