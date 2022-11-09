import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationSummary } from "./operationsummary";
export declare class ListOperationsResponse extends SpeakeasyBase {
    nextToken?: string;
    operationSummaryList?: OperationSummary[];
}
