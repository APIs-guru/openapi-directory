import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.
**/
export declare class BatchItemError extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    index?: number;
}
