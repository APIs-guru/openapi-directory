import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding.
**/
export declare class FailedBatchItem extends SpeakeasyBase {
    errorMessage: string;
    id: string;
}
