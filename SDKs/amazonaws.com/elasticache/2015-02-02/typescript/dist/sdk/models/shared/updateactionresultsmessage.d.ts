import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessedUpdateAction } from "./processedupdateaction";
import { UnprocessedUpdateAction } from "./unprocessedupdateaction";
export declare class UpdateActionResultsMessage extends SpeakeasyBase {
    processedUpdateActions?: ProcessedUpdateAction[];
    unprocessedUpdateActions?: UnprocessedUpdateAction[];
}
