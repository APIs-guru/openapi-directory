import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Provides details in the event of a failed flow, including the failure count and the related error messages.
**/
export declare class ErrorInfo extends SpeakeasyBase {
    executionMessage?: string;
    putFailuresCount?: number;
}
