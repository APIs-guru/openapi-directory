import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a document that matches the search request.
**/
export declare class Hit extends SpeakeasyBase {
    exprs?: Map<string, string>;
    fields?: Map<string, string[]>;
    highlights?: Map<string, string>;
    id?: string;
}
