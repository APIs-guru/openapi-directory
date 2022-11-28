import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>ListAccountAliases</a> request.
**/
export declare class ListAccountAliasesResponse extends SpeakeasyBase {
    accountAliases: string[];
    isTruncated?: boolean;
    marker?: string;
}
