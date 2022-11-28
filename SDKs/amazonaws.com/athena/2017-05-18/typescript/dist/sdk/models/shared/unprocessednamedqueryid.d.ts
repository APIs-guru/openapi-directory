import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a named query ID that could not be processed.
**/
export declare class UnprocessedNamedQueryId extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    namedQueryId?: string;
}
