import { SpeakeasyBase } from "../../../internal/utils";
import { OperationSummary } from "./operationsummary";
export declare class ListOperationsResponse extends SpeakeasyBase {
    nextToken?: string;
    operationSummaryList?: OperationSummary[];
}
