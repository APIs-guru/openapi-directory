import { SpeakeasyBase } from "../../../internal/utils";
import { NamedQuery } from "./namedquery";
import { UnprocessedNamedQueryId } from "./unprocessednamedqueryid";
export declare class BatchGetNamedQueryOutput extends SpeakeasyBase {
    namedQueries?: NamedQuery[];
    unprocessedNamedQueryIds?: UnprocessedNamedQueryId[];
}
